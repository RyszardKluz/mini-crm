import { useNavigate } from 'react-router-dom';
export const LoginForm = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center  bg-slate-400'>
      <form
        action=''
        method='post'
        className='flex flex-col gap-3 bg-white p-6 rounded-lg shadow-md w-80'
      >
        <input
          type='text'
          name='email'
          className='p-2 border rounded-md'
          placeholder='email@email.com'
        />
        <input
          type='password'
          name='password'
          className='p-2 border rounded-md'
          placeholder='***********'
        />

        <div className='flex justify-between items-center text-sm'>
          <button
            type='button'
            className='text-blue-600 hover:underline'
            onClick={() => {
              navigate('/forgot-password');
            }}
          >
            Forgot password?
          </button>
          <button
            type='submit'
            className='bg-slate-700 text-white px-4 py-1 rounded-md hover:bg-slate-800'
            onClick={(e) => {
              e.preventDefault();
            }}
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
