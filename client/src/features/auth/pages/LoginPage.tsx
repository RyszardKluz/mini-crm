import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import type { LoginFormData } from '../schemas/loginSchema';
import { useAuthStore } from '../store/authStore';
import { useToast } from '../../../hooks/useToast';

export const LoginPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const loginHandler = async ({ email, password }: LoginFormData) => {
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      showToast((error as Error).message, 'error');
    }
  };

  const handleNavigateToRegister = () => navigate('/register');
  const handleFormSubmit = (data: LoginFormData) => {
    loginHandler(data);
  };

  return (
    <LoginForm
      onFormSubmit={handleFormSubmit}
      onNavigateToRegister={handleNavigateToRegister}
    />
  );
};
