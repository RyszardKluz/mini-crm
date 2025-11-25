import { useNavigate } from 'react-router-dom';

export const RegisterForm = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center  bg-slate-400 text-sm'>
      <form
        action=''
        method='post'
        className='flex flex-col gap-3 bg-white p-6 rounded-lg shadow-md w-80'
      >
        Email:
        <input
          alt='E-mail'
          type='text'
          name='email'
          className='p-2 border rounded-md'
          placeholder='email@email.com'
        />
        Name:
        <input
          alt='Name'
          type='text'
          name='name'
          className='p-2 border rounded-md'
          placeholder='Enter your name'
        />
        Password:
        <input
          alt='password'
          type='password'
          name='password'
          className='p-2 border rounded-md'
          placeholder='***********'
        />
        Repeat password:
        <input
          alt='password'
          type='password'
          name='password'
          className='p-2 border rounded-md'
          placeholder='***********'
        />
        <button
          type='submit'
          className='bg-slate-700 text-white px-4 py-1 rounded-md hover:bg-slate-800'
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Sign up
        </button>
      </form>
      <div className='right-20 relative'>
        {' '}
        Already have an account?
        <br />
        <button
          className='mt-1 hover:text-white'
          onClick={() => {
            navigate('/login');
          }}
        >
          Sign in!
        </button>
      </div>
    </div>
  );
};
