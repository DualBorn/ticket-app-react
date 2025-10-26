export const STORAGE_KEYS = {
  SESSION: 'ticketapp_session',
  TICKETS: 'tickets'
} as const;

export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  SIGNUP: '/auth/signup',
  DASHBOARD: '/dashboard',
  TICKETS: '/tickets'
} as const;

export const DEMO_CREDENTIALS = {
  ADMIN: {
    email: 'admin@ticketapp.com',
    password: 'password123'
  },
  USER: {
    email: 'user@ticketapp.com',
    password: 'password123'
  }
} as const;

export const TICKET_STATUSES = ['open', 'in_progress', 'closed'] as const;
export const TICKET_PRIORITIES = ['low', 'medium', 'high'] as const;

export const VALIDATION_RULES = {
  EMAIL_REGEX: /\S+@\S+\.\S+/,
  MIN_PASSWORD_LENGTH: 6,
  MIN_NAME_LENGTH: 2
} as const;
