import spinner from '../assets/spinner.svg';

export const Spinner = () => (
  <div className='grid place-items-center h-screen'>
    <img
      src={spinner}
      alt='Loading...'
      className='w-14 h-14 animate-spin-slow    '
    />
  </div>
);
