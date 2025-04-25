import React from "react"
import { STATIC_MAIN_LAYOUT, STATIC_PUBLIC_LAYOYT } from "../constants/statics"
import { RLogin, RMenu1, RMenu2, RMenu3, RNewPost, RSubMenu1, RSubMenu2 } from "./pathRoute"

const PageLogin = React.lazy(() => import("../pages/auth"))
const PageMenu1 = React.lazy(() => import("../pages/menu1"))
const PageMenu2 = React.lazy(() => import("../pages/menu2"))
const PageMenu3 = React.lazy(() => import("../pages/menu3"))
const PageSubMenu1 = React.lazy(() => import("../pages/subMenu1"))
const PageSubMenu2 = React.lazy(() => import("../pages/subMenu2"))
const PageNewPost = React.lazy(() => import("../pages/menu1/newpost"))

const routes = [
  {
    path: RLogin?.path,
    name: RLogin?.name,
    element: <PageLogin />,
    elementPageLogin: <PageLogin /> ,
    keyProp: STATIC_PUBLIC_LAYOYT
  },
  {
    path: RMenu1?.path,
    name: RMenu1?.name,
    element: <PageMenu1 />,
    elementPageLogin: <PageLogin /> ,
    keyProp: STATIC_MAIN_LAYOUT
  },
  {
    path: RMenu2?.path,
    name: RMenu2?.name,
    element: <PageMenu2 />,
    elementPageLogin: <PageLogin /> ,
    keyProp: STATIC_MAIN_LAYOUT
  },
  {
    path: RMenu3?.path,
    name: RMenu3?.name,
    element: <PageMenu3 />,
    elementPageLogin: <PageLogin /> ,
    keyProp: STATIC_MAIN_LAYOUT
  },
  {
    path: RSubMenu1?.path,
    name: RSubMenu1?.name,
    element: <PageSubMenu1 />,
    elementPageLogin: <PageLogin /> ,
    keyProp: STATIC_MAIN_LAYOUT
  },
  {
    path: RSubMenu2?.path,
    name: RSubMenu2?.name,
    element: <PageSubMenu2 />,
    elementPageLogin: <PageLogin /> ,
    keyProp: STATIC_MAIN_LAYOUT
  },
  {
    path: RNewPost?.path,
    name: RNewPost?.name,
    element: <PageNewPost />,
    elementPageLogin: < PageLogin />,
    keyProp: STATIC_MAIN_LAYOUT
  }
]

export default routes