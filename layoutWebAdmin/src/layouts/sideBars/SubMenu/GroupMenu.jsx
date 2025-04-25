import { List } from '@mui/material'
import React, { Fragment, useState } from 'react'
import ItemMenu from './ItemMenu'
import ItemSubMenu from './ItemSubMenu'

function GroupMenu({ item }) {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <List sx={{ padding: 0}}>
      <ItemMenu open = {open} handleClick= {handleClick} item= {item}/>
      {
        item?.sub && <ItemSubMenu open={open} sub = {item?.listSub}/>
      }
    </List>
  )
}

export default GroupMenu