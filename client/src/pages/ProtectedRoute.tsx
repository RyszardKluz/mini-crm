import { useAuth } from '../features/auth/hooks/useAuth';
import { Spinner } from '../components/Spinner';
import { useNavigate, Outlet } from 'react-router-dom';

export const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) return <Spinner />;
  if (!isAuthenticated) navigate('/');
  return <Outlet />;
};
