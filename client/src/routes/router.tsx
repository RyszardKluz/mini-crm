import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout } from '../features/auth/components/AuthLayout';
import { RegisterPage } from '../features/auth/pages/RegisterPage';
import { ForgotPasswordPage } from '../features/auth/pages/ForgotPasswordPage';
import { DashboardLayout } from '../features/dashboard/components/DashboardLayout';
import { LoginPage } from '../features/auth/pages/LoginPage';
import { MainPage } from '../features/dashboard/pages/MainPage';
import { ClientsPage } from '../features/dashboard/pages/ClientsPage';
import { MyProfilePage } from '../features/dashboard/pages/MyProfilePage';
import { ProtectedRoute } from '../pages/ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to='/login' replace /> },
      {
        path: 'login',
        element: <LoginPage />,
      },
      { path: 'register', element: <RegisterPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Navigate to='/dashboard/main' replace /> },
          { path: 'main', element: <MainPage /> },
          { path: 'clients', element: <ClientsPage /> },
          { path: 'my-profile', element: <MyProfilePage /> },
        ],
      },
    ],
  },
]);
