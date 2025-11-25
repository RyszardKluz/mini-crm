import { useAuthStore } from '../store/authStore';
import { useEffect } from 'react';

export const useAuth = () => {
  const { fetchUser, isAuthenticated, loading, user } = useAuthStore();
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return { user, isAuthenticated, loading };
};
