export const toastClasses = {
  base: 'flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg transition-all duration-300',
  container: 'fixed top-4 right-4',

  variants: {
    success: 'bg-green-500 text-white',
    error: 'bg-red-500 text-white',
    warning: 'bg-yellow-500 text-black',
    info: 'bg-blue-500 text-white',
  },
};
