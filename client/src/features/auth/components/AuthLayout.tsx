import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <div className='grid grid-cols-3 grid-col h-screen p-10 gap-1 bg-zinc-200 '>
      <div className='bg-slate-700 text-white flex items-start p-12 justify-center col-1 rounded-lg'>
        <h1 className='text-4xl font-bold'>Mini CRM!</h1>
      </div>
      <div className='flex items-center justify-center bg-slate-400 col-span-2 rounded-lg'>
        <Outlet />
      </div>
    </div>
  );
};
