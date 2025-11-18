import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from '../schemas/loginSchema';

type LoginFormProps = {
  onFormSubmit: (data: LoginFormData) => void;
  onNavigateToRegister: () => void;
};

export const LoginForm = ({
  onFormSubmit,
  onNavigateToRegister,
}: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center  bg-slate-400 text-sm'>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        action=''
        method='post'
        className='flex flex-col gap-3 bg-white p-6 rounded-lg shadow-md w-80'
      >
        <input
          type='text'
          className='p-2 border rounded-md'
          placeholder='email@email.com'
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}

        <input
          type='password'
          className='p-2 border rounded-md'
          placeholder='***********'
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <div className='flex justify-between items-center text-sm'>
          <button
            type='button'
            className='text-blue-600 hover:underline'
            onClick={onNavigateToRegister}
          >
            Forgot password?
          </button>
          <button
            type='submit'
            className='bg-slate-700 text-white px-4 py-1 rounded-md hover:bg-slate-800'
          >
            Log in
          </button>
        </div>
      </form>

      <div className='mt-4 text-sm text-center'>
        Don't have an account yet?
        <br />
        <button
          className='mt-2 p-1.5 rounded-md border border-black bg-white hover:bg-gray-100'
          onClick={() => {
            navigate('/register');
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};
