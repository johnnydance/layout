import { Fragment } from 'react'
import GroupMenu from './SubMenu/GroupMenu'
import ItemMenu from './ItemMenu'
import { Box, List, Menu } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { RMenu1, RMenu2, RMenu3, RSubMenu1, RSubMenu2 } from '../../routes/pathRoute'
import { TbSettings } from "react-icons/tb";

export default function ListMenu() {
  const { t } = useTranslation()
  const listMenu = [
    {
      id: "RMenu1",
      menu: t(RMenu1.name),
      icon: (color) => <TbSettings fontSize={20} color = {color} />,
      sub: false,
      listSub: [],
      url: RMenu1?.path,
      isPrivate: false
    },
    {
      id: "RMenu2",
      menu: t(RMenu2?.name),
      icon: (color) => <TbSettings fontSize={20} color = {color} />,
      sub: false,
      listSub: [],
      url: RMenu2?.path,
      isPrivate: false
    },
    {
      id: "RMenu3",
      menu: t(RMenu3?.name),
      icon: (color) => <TbSettings fontSize={20} color = {color} />,
      sub: false,
      listSub: [],
      url: RMenu3?.path,
      isPrivate: false
    },

    

    {
      id: "PostNews",
      menu: t("Menu nhóm"),
      icon: (color) => <TbSettings fontSize={20}  color={color}/>,
      sub: true,
      listSub: [
        {
          id: "RSubMenu1",
          subMenu: t(RSubMenu1?.name),
          url: RSubMenu1?.path,
        },
        {
          id: "RSubMenu2",
          subMenu: t(RSubMenu2?.name),
          url: RSubMenu2?.path,
        },
        
        
      ],
      isPrivate: true
    },
  ]

  return (
    <Box
      // pr={2}
      // gap={1}
      display={"flex"}
      flexDirection={"column"}>
      {
        listMenu.map((item, i) => {

          return (
            <Fragment key={i}>
             {item?.sub ? <GroupMenu item={item} /> : <ItemMenu item={item} />}
            </Fragment>
          )
        })
      }
    </Box>
  )
}
