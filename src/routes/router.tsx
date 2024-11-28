import { lazy } from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, useNavigate } from "react-router-dom";
import { SuspenseErrorBoundary } from "./SuspenseErrorBoundary";
import AddEmployee from "../components/employee/AddEmployee";
import AddEnquiry from "src/components/enquiry/AddEnquiry";
import AddEstimation from "src/components/estimation/AddEstimation";
import ProtectedRoute from "./ProtectedRoute";
import { Button } from "antd";
import AccessDeny from "src/components/accessDeny/AccessDeny";

//lazy imports
// After Auth routes
const PrivateRoutes = lazy(() => import("./PrivateRouter"));
const Home = lazy(() => import("../components/home/Home"));

// Auth routes
const LayoutAuth = lazy(() => import("../components/layoutAuth/LayoutAuth"));
const Login = lazy(() => import("../components/login/Login"));
const Register = lazy(() => import("../components/register/Register"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <SuspenseErrorBoundary>
            <PrivateRoutes />
          </SuspenseErrorBoundary>
        }
      >
        <Route
          index
          element={
            <ProtectedRoute allowedRoles={['*']}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          index
          path="employee/add"
          element={
            <ProtectedRoute allowedRoles={['admin']}>
              <AddEmployee/>
            </ProtectedRoute>
          }
        />
        <Route
          index
          path="enquiry/add"
          element={
            <ProtectedRoute allowedRoles={['admin', 'sales']}>
              <AddEnquiry />
            </ProtectedRoute>
          }
        />
        <Route
          index
          path="estimation/add"
          element={
            <ProtectedRoute allowedRoles={['admin', 'engineering']}>
              <AddEstimation />
            </ProtectedRoute>
          }
        />
      </Route>
      <Route
        path="auth/*"
        element={
          <SuspenseErrorBoundary>
            <LayoutAuth />
          </SuspenseErrorBoundary>
        }
      >
        <Route
          index
          path="signup"
          element={
            <SuspenseErrorBoundary>
              <Register />
            </SuspenseErrorBoundary>
          }
        />
        <Route
          path="signin"
          element={
            <SuspenseErrorBoundary>
              <Login />
            </SuspenseErrorBoundary>
          }
        />
      </Route>
      <Route
        path="access-deny"
        element={
          <SuspenseErrorBoundary>
            <AccessDeny/>
          </SuspenseErrorBoundary>
        }
      />
    </>,
  ),
);

export default router;
