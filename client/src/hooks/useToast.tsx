import { useToastStore } from '../store/useToastStore';

export const useToast = () => {
  const { showToast, hideToast } = useToastStore();
  return { showToast, hideToast };
};
