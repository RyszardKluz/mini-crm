import { useNavigate } from 'react-router-dom';
import { RegisterForm } from '../components/RegisterForm';
import type { RegisterFormData } from '../schemas/registerSchema';
import { useToast } from '../../../hooks/useToast';

export const RegisterPage = () => {
  const { showToast } = useToast();
  const registerHandler = async (data: RegisterFormData) => {
    const dataTransfer = {
      password: data.password,
      name: data.name,
      email: data.email,
    };
    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        body: JSON.stringify(dataTransfer),
        headers: { 'Content-Type': 'application/json' },
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log('User created', data);
    } catch (error) {
      showToast((error as Error).message, 'error');
    }
  };

  const navigate = useNavigate();

  const handleFormSubmit = (data: RegisterFormData) => {
    registerHandler(data);
  };
  const handleNavigateToLogin = () => {
    navigate('/login');
  };

  return (
    <RegisterForm
      onNavigateToLogin={handleNavigateToLogin}
      onFormSubmit={handleFormSubmit}
    />
  );
};
