import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../components/ui';
import { Footer, DecorativeCircles, WavyBackground } from '../components/layout';

const LandingPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-100">
      {/* Navigation */}
      <nav ref={menuRef} className="relative z-10 px-4 py-6 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-xl sm:text-2xl font-bold text-primary-600">
            TicketApp
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link 
              to="/auth/login" 
              className="text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              Login
            </Link>
            <Link 
              to="/auth/signup" 
              className="btn-primary"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-600 hover:text-primary-600 focus:outline-none focus:text-primary-600"
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="space-y-2">
              <Link 
                to="/auth/login" 
                onClick={toggleMobileMenu}
                className="block w-full text-center text-gray-600 hover:text-primary-600 py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 border border-gray-300"
              >
                Login
              </Link>
              <Link 
                to="/auth/signup" 
                onClick={toggleMobileMenu}
                className="block w-full text-center btn-primary"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <DecorativeCircles />
        
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16 md:py-20 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in">
            Streamline Your
            <span className="text-primary-600 block">Ticket Management</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-2 animate-slide-up">
            A powerful, modern ticket management system that helps you organize, 
            track, and resolve issues efficiently across your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-slide-up px-4">
            <Link 
              to="/auth/signup" 
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Get Started Free
            </Link>
            <Link 
              to="/auth/login" 
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Wavy Background */}
        <WavyBackground />
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Everything You Need to Manage Tickets
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Powerful features designed to streamline your workflow and boost productivity
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Feature Card 1 */}
            <Card hover>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4" aria-hidden="true">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Create & Track</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Easily create tickets with detailed information and track their progress through different stages.
              </p>
            </Card>

            {/* Feature Card 2 */}
            <Card hover>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-success-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4" aria-hidden="true">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Get insights into your ticket metrics with comprehensive analytics and reporting features.
              </p>
            </Card>

            {/* Feature Card 3 */}
            <Card hover>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-warning-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4" aria-hidden="true">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-warning-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Enterprise-grade security with reliable authentication and data protection.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 px-2">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join thousands of teams already using TicketApp to streamline their workflow
          </p>
          <Link 
            to="/auth/signup" 
            className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 inline-block"
          >
            Start Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
