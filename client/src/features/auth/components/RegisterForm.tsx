import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  registerSchema,
  type RegisterFormData,
} from '../schemas/registerSchema';

type RegisterFormProps = {
  onFormSubmit: (data: RegisterFormData) => void;
  onNavigateToLogin: () => void;
};

export const RegisterForm = ({
  onFormSubmit,
  onNavigateToLogin,
}: RegisterFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className='flex flex-col items-center justify-center  font-sans text-xs'>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        action=''
        method='post'
        className='flex flex-col gap-3 bg-background p-6 rounded-lg shadow-md w-80'
      >
        <label>Email:</label>
        <input
          alt='E-mail'
          type='text'
          className='p-2 border rounded-md'
          placeholder='email@email.com'
          {...register('email')}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label>Name:</label>
        <input
          alt='Name'
          type='text'
          className='p-2 border rounded-md'
          placeholder='Enter your name'
          {...register('name')}
        />
        {errors.name && <p>{errors.name.message}</p>}

        <label>Password:</label>
        <input
          alt='password'
          type='password'
          className='p-2 border rounded-md'
          placeholder='***********'
          {...register('password')}
        />
        {errors.password && <p>{errors.password.message}</p>}

        <label>Repeat password:</label>
        <input
          alt='password'
          type='password'
          className='p-2 border rounded-md'
          placeholder='***********'
          {...register('repeatPassword')}
        />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}

        <button
          type='submit'
          className='bg-secondary-700 text-white px-4 py-1 rounded-md hover:bg-secondary-900'
        >
          Sign up
        </button>

        <div className=' mt-2 text-sm rounded-md '>
          {' '}
          Already have an account?
          <br />
          <button
            className='bg-secondary-700 text-white px-2 py-0.5 rounded-md hover:bg-secondary-900'
            onClick={() => {
              onNavigateToLogin();
            }}
          >
            Sign in!
          </button>
        </div>
      </form>
    </div>
  );
};
