import { useAuthStore } from '../store/authStore';

export const useSpinner = () => {
  return useAuthStore((state) => state.loading);
};
