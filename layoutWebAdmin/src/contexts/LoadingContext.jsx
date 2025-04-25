// LoadingContext.js
import { Box, CircularProgress, Fab, Modal } from '@mui/material'
import { createContext, useContext, useState, useCallback } from 'react' // Đảm bảo đường dẫn đúng
import { blue, green } from '@mui/material/colors'
import { logAxons } from '../constants/images'
// import Loading from '../components/Loading'


const Loading =({ open }) => {
  return (
    <Modal sx={{ zIndex: 999999 }}
      BackdropProps={{
        style: { backgroundColor: 'transparent' }
      }}
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          {/* <Fab><img height={60} src={logAxons} /></Fab> */}
          <CircularProgress
            size={67}
            sx={{
              color: blue[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        </Box>

        {/* <Box sx={{ mt:2 }}>
          <PropagateLoader color="rgba(238, 238, 238,0.5)" size={10} />
        </Box> */}
      </Box>
    </Modal>
  )
}

const LoadingContext = createContext()

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)

  const showLoading = useCallback((delay = 7000) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, delay)
  }, [])

  const hideLoading = useCallback(() => {
    setLoading(false)
  }, [])


  return (
    <LoadingContext.Provider value={{ showLoading, hideLoading }}>
      {children}
      <Loading open={loading} />
    </LoadingContext.Provider>
  )
}

// Custom hook để sử dụng LoadingContext
export const useLoading = () => {
  return useContext(LoadingContext)
}
