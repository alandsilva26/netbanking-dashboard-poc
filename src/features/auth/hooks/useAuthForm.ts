import { useNavigate } from 'react-router-dom';
import { useAuth } from 'providers';
import { useForm } from 'hooks/useForm';
import { AuthObj } from 'features/users';

/**
 *
 * Custom hook for authentication form
 *
 */
export const useAuthForm = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const form = useForm<AuthObj>(
    { id: '', password: '' },
    (formState: AuthObj) => {
      auth.loginAsCustomer({
        id: formState.id,
        password: formState.password,
      });
      navigate('/');
    }
  );

  return { ...form };
};
