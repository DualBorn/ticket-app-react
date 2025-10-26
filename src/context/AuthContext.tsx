import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { toast } from 'react-toastify';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session on app load
    const sessionToken = localStorage.getItem('ticketapp_session');
    if (sessionToken) {
      try {
        const userData = JSON.parse(sessionToken);
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('ticketapp_session');
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    if (email === 'admin@ticketapp.com' && password === 'password123') {
      const userData: User = {
        id: '1',
        email: email,
        name: 'Admin User'
      };
      
      localStorage.setItem('ticketapp_session', JSON.stringify(userData));
      setUser(userData);
      toast.success('Login successful!');
      setIsLoading(false);
      return true;
    } else if (email === 'user@ticketapp.com' && password === 'password123') {
      const userData: User = {
        id: '2',
        email: email,
        name: 'Test User'
      };
      
      localStorage.setItem('ticketapp_session', JSON.stringify(userData));
      setUser(userData);
      toast.success('Login successful!');
      setIsLoading(false);
      return true;
    } else {
      toast.error('Invalid email or password');
      setIsLoading(false);
      return false;
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock signup - in real app, this would be an API call
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      setIsLoading(false);
      return false;
    }
    
    const userData: User = {
      id: Date.now().toString(),
      email: email,
      name: name
    };
    
    localStorage.setItem('ticketapp_session', JSON.stringify(userData));
    setUser(userData);
    toast.success('Account created successfully!');
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    localStorage.removeItem('ticketapp_session');
    setUser(null);
    toast.success('Logged out successfully');
  };

  const value: AuthContextType = {
    user,
    login,
    signup,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
