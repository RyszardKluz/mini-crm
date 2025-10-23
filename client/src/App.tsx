import './App.css';

export default function App() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white'>
      <h1 className='text-5xl font-extrabold drop-shadow-lg'>
        {' '}
        Tailwind działa! 🔥
      </h1>
      <p className='mt-4 text-lg bg-black/30 px-4 py-2 rounded-xl backdrop-blur-sm'>
        Jeśli to widzisz z gradientem i ładnym tekstem — wszystko gra 💪
      </p>
      <button className='mt-6 px-6 py-3 bg-white text-pink-600 rounded-md font-semibold shadow-md hover:scale-120 click:bg-violet hover:bg-red-50 transition-all'>
        Kliknij mnie
      </button>
      <img src='./assets/pictures/mountains.png'></img>
    </div>
  );
}
