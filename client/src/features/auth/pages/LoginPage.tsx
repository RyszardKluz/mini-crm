import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import type { LoginFormData } from '../schemas/loginSchema';
import { useAuthStore } from '../store/authStore';

export const LoginPage = () => {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const loginHandler = async ({ email, password }: LoginFormData) => {
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (error) {
      console.log((error as Error).message);
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
