import React, { useReducer, createContext, useContext, useCallback, memo } from 'react'
import {
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Slide,
  Button,
  Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import { logAxons } from '../constants/images'
import { ErrorOutline } from '@mui/icons-material'
import theme from '../theme'

// Slide Transition component
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

// Dialog component
const Dialog = memo(({ alertType, open, title, content, onClose, onCancel, onOk }) => {
  const { t } = useTranslation()

  return (
    <MuiDialog
      fullWidth
      maxWidth="xs"
      sx={{ zIndex: 9999}}
      open={open}
      TransitionComponent={Transition}
      onClose={onClose}
      keepMounted
    >
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', gap: 1, flexDirection:"column", p: 2}}>
        <ErrorOutline sx={{ fontSize : '64px', color: theme.palette.primary.main}} /> 
        <Typography fontWeight={"600"} fontSize={24}>{t(title)}</Typography>
      </DialogTitle>
      <DialogContent sx={{ py: 2, textAlign:"center", p: 2}}>
        <DialogContentText>{t(content)}</DialogContentText>
      </DialogContent>
      {alertType === 'confirmation' && (
        <DialogActions sx={{ display: "flex", flex: 1, flexDirection:"row", gap: 1, p: 2}}>
          <Button variant="outlined" fullWidth  onClick={onCancel} color='primary' >
            {t('Cancel')}
          </Button>
          <Button fullWidth onClick={onOk}  variant='contained'>
            {t('Ok')}
          </Button>
        </DialogActions>
      )}
    </MuiDialog>
  )
})

// Alert reducer to manage state
const alertReducer = (state, action) => {
  switch (action.type) {
  case 'SHOW_ALERT':
    return {
      ...state,
      open: true,
      alertType: action.payload.alertType,
      title: action.payload.title,
      content: action.payload.content,
      onOkCallback: action.payload.onOkay,
      onCancelCallback: action.payload.onCancel,
    }
  case 'CLOSE_ALERT':
    return { ...state, open: false }
  default:
    return state
  }
}

// AlertContext to provide alert functions
const AlertContext = createContext()

export const AlertProvider = ({ children }) => {
  const initialState = {
    open: false,
    title: 'Notification',
    content: '',
    alertType: 'notification',
    onOkCallback: () => {},
    onCancelCallback: () => {},
  }

  const [state, dispatch] = useReducer(alertReducer, initialState)

  const showAlert = useCallback(({ alertType = 'notification', title = 'Notification', content = '', onOkay = () => {}, onCancel = () => {} }) => {
    dispatch({
      type: 'SHOW_ALERT',
      payload: { alertType, title, content, onOkay, onCancel },
    })
  }, [])

  const handleOk = () => {
    state.onOkCallback()
    dispatch({ type: 'CLOSE_ALERT' })
  }

  const handleCancel = () => {
    state.onCancelCallback()
    dispatch({ type: 'CLOSE_ALERT' })
  }

  const handleClose = () => {
    dispatch({ type: 'CLOSE_ALERT' })
  }

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      <Dialog
        alertType={state.alertType}
        open={state.open}
        onClose={handleClose}
        onCancel={state.alertType === 'confirmation' ? handleCancel : undefined}
        onOkay={state.alertType === 'confirmation' ? handleOk : undefined}
        title={state.title}
        content={state.content}
      />
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  return useContext(AlertContext)
}
