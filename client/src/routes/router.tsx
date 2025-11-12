import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AuthLayout } from '../features/auth/components/AuthLayout';
import { RegisterPage } from '../features/auth/pages/RegisterPage';
import { ForgotPasswordPage } from '../features/auth/pages/ForgotPasswordPage';
import { DashboardLayout } from '../features/dashboard/components/DashboardLayout';
import { LoginPage } from '../features/auth/pages/LoginPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to='/login' replace /> },
      {
        path: '/login',
        element: <LoginPage />,
      },
      { path: '/register', element: <RegisterPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
  },
]);
