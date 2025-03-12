import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async ({ firstName, lastName, email, password, phoneNumber }) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_BASE_URL}/user/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, phoneNumber })
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.message || 'Something went wrong');
      }

      // Save the user to local storage (optional)
      localStorage.setItem('user', JSON.stringify(json));

      // Update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      // Update loading state
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  return { signup, isLoading, error };
};


