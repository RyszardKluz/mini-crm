import { modalClasses } from '../styles/modalClasses';
import { toastClasses } from '../styles/toastClasses';
import { useToastStore } from '../store/useToastStore';

export const Toast = () => {
  const { isOpen, variant, message } = useToastStore();
  return (
    <div
      className={`${toastClasses.base} 
        ${toastClasses.variants[variant]}
         ${isOpen ? modalClasses.visible : modalClasses.hidden}`}
    >
      {message}
    </div>
  );
};
