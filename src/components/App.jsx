import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { lazy, Suspense, useEffect } from "react";
import { Loader } from "./Loader/Loader";
import { useDispatch } from "react-redux";
import { refreshThunk } from "redux/auth/auth.operations";
import * as ROUTES from 'constants/routes.js'
import RestrictedRoute from "./RestrictedRoute";
import PrivateRoute from "./PrivateRoute";
const Home = lazy(() => import("pages/HomePage/HomePage"));
const Register = lazy(() => import("pages/RegisterPage/RegisterPage"));
const Contacts = lazy(() => import("pages/ContactsPage/ContactsPage"));
const Login = lazy(() => import("pages/LoginPage/LoginPage"));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <Home />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <Login />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <Register />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivateRoute>
        <Contacts />
      </PrivateRoute>
    ),
  }
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(refreshThunk())
}, [dispatch])

  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to={ROUTES.HOME_ROUTE} />} />
        </Routes>
      </Suspense>
    </Layout>
  );
};

