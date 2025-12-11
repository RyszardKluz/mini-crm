import { useAuth } from '../features/auth/hooks/useAuth';
import { Spinner } from '../components/Spinner';
import { Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <Spinner />;
  if (!isAuthenticated) {
    return <div>Not authorized !!!</div>;
  }
  return <Outlet />;
};
