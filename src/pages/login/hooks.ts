import { useLoginMutation } from 'api/auth/auth';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from 'slices/user/userSlice';
import { FormValues } from './types';

export function useLogin() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login] = useLoginMutation();

  const onSubmit = useCallback(async () => {
    try {
      clearErrors()
      const { email, password } = getValues();
      const data = await login({ email, password }).unwrap();
      dispatch(setUser(data));
      navigate('/');
    } catch (error) {
      console.log(error);
      setError('password', {
        type: 'manual',
        message: 'The email or password you entered don’t match',
      });
    }
  }, [clearErrors, dispatch, getValues, login, navigate, setError]);

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    setError,
    setValue,
    clearErrors,
    errors,
  };
}
