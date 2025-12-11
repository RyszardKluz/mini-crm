import { Outlet } from 'react-router-dom';
import { Spinner } from '../../../components/Spinner';
import { Toast } from '../../../components/Toast';
import { useSpinner } from '../hooks/useSpinner';

export const AuthLayout = () => {
  const loading = useSpinner();
  if (loading) return <Spinner />;
  return (
    <div className=' grid grid-cols-3  h-screen p-6 gap-4 bg-background '>
      <Toast />
      <div className='bg-primary-800 text-white flex items-start p-12 justify-center col-1 rounded-lg'>
        <h1 className='text-4xl font-heading text-center'>Mini CRM!</h1>
      </div>
      <div className='flex items-center justify-center bg-primary-400 col-span-2 rounded-lg '>
        <Outlet />
      </div>
    </div>
  );
};
