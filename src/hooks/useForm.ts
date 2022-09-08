import { useState } from 'react';
import { inputChangeEventFn, formSubmitEventFn } from 'types';

export const useForm = <T>(
  initialState: T,
  submitFn: (formState: T) => any
) => {
  const [formState, setFormState] = useState<T>({ ...initialState });

  const handleInputChange: inputChangeEventFn = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit: formSubmitEventFn = (event): void => {
    event.preventDefault();
    submitFn(formState);
  };

  return { formState, setFormState, handleInputChange, handleSubmit };
};
