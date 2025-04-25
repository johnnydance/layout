import React, { Suspense } from 'react';
import routes from './router';
import Layout from '../layouts';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { RMenu1, RNewPost, sub } from './pathRoute';
import PageNotFound from '../pages/notfound';
import { STATIC_PUBLIC_LAYOYT } from '../constants/statics';

function AppRoute() {
  // const {user} = useAppContext()
  const Navigate = useNavigate()
  let user = true
  const RenderElement = (r, user) => {
  
 

    if (user) {
      return(
        <Layout keyProp={r.keyProp}>
          <Suspense fallback={<div>Loading...</div>}>
            {r.element}
          </Suspense>
        </Layout>
      )
    }
    return(
      <Layout keyProp={STATIC_PUBLIC_LAYOYT}>
          <Suspense fallback={<div>Loading...</div>}>
            {r.elementPageLogin}
          </Suspense>
        </Layout>
    )
   
  }
  return (
    <Routes>
      {routes.map((r, i) => (
        <Route key={i} path={r.path} element={RenderElement(r, user)} />
      ))}
      <Route exact path={sub ? sub : "/"} element={<Navigate to={RNewPost.path} replace />} />
      <Route exact path={'*'} element={<PageNotFound/>} />
    </Routes>
  );
}

export default AppRoute;