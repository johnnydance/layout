import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
// import { routesGlobal, routesCountry, routesBusiness } from '../routers/routes'
import { useTranslation } from 'react-i18next'
import dayjs from 'dayjs'
import routes from '../routes/router'
import Breadcrumbs from './Breadcrumbs'

const HeaderPage = React.memo(() => {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)
  const { t } = useTranslation()
  const to = `/${pathnames.slice(0, pathnames.length).join('/')}`
  const pageName = findPageName(to)

  const [currentTime, setCurrentTime] = useState(dayjs().format('D MMMM YYYY h:mm A'))

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(dayjs().format('D MMMM YYYY h:mm A'))
    }, 1000)

    return () => clearInterval(intervalId) // Cleanup interval on component unmount
  }, [])

  return (
    <Box>
    <Breadcrumbs />
      <Box sx={{
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        alignItems: "baseline",
        pb:2
      }}>
      
        <Typography
          fontSize={'32px'}
          fontWeight={"700"}>
          {t(pageName)}
        </Typography>
        <Typography fontWeight={"500"}>
          {currentTime}
        </Typography>
      </Box>
      
    </Box>
  )
})

function findPageName(to) {

  // Tìm Route có đường dẫn (path) bắt đầu với giá trị `to`
  const matchedRoute = routes
    .filter(route => to.startsWith(route.path))
    .sort((a, b) => b.path.length - a.path.length)[0] // Prioritize the longest match

  // Trả về tên của trang hoặc một giá trị mặc định nếu không tìm thấy
  return matchedRoute ? matchedRoute.name : 'Trang không tồn tại'
}


export default HeaderPage