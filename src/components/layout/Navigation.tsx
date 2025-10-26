import React from 'react';
import { Link } from 'react-router-dom';
import type { User } from '../../types';
import { Button } from '../ui';

interface NavigationProps {
  user: User | null;
  onLogout: () => void;
  isMobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;
  currentPage?: 'dashboard' | 'tickets';
}

export const Navigation: React.FC<NavigationProps> = ({
  user,
  onLogout,
  isMobileMenuOpen,
  onToggleMobileMenu,
  currentPage = 'dashboard'
}) => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center min-w-0 flex-1">
            <Link to="/dashboard" className="text-xl sm:text-2xl font-bold text-primary-600 truncate">
              TicketApp
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user?.name}</span>
            {currentPage === 'dashboard' && (
              <Link
                to="/tickets"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                Manage Tickets
              </Link>
            )}
            {currentPage === 'tickets' && (
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
              >
                Dashboard
              </Link>
            )}
            <Button
              onClick={onLogout}
              variant="secondary"
            >
              Logout
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Greeting */}
            <span className="text-gray-700 text-sm truncate max-w-40">Welcome, {user?.name}</span>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={onToggleMobileMenu}
              className="text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600 flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 border-t border-gray-200">
              {currentPage === 'dashboard' && (
                <Link
                  to="/tickets"
                  className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={onToggleMobileMenu}
                >
                  Manage Tickets
                </Link>
              )}
              {currentPage === 'tickets' && (
                <Link
                  to="/dashboard"
                  className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                  onClick={onToggleMobileMenu}
                >
                  Dashboard
                </Link>
              )}
              <button
                onClick={() => {
                  onLogout();
                  onToggleMobileMenu();
                }}
                className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
