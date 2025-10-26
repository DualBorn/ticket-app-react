import { useState } from 'react';
import type { FormErrors } from '../types';
import { validateLoginForm, validateSignupForm, validateTicketForm } from '../utils/validation';

export const useFormValidation = () => {
  const [errors, setErrors] = useState<FormErrors>({});

  const validateLogin = (email: string, password: string): boolean => {
    const newErrors = validateLoginForm(email, password);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignup = (name: string, email: string, password: string, confirmPassword: string): boolean => {
    const newErrors = validateSignupForm(name, email, password, confirmPassword);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateTicket = (title: string, status: string): boolean => {
    const newErrors = validateTicketForm(title, status);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const clearErrors = () => setErrors({});

  return { errors, validateLogin, validateSignup, validateTicket, clearErrors };
};
