import type { Ticket, TicketStats } from '../types';
import { STORAGE_KEYS } from '../constants';

export const loadTickets = (): Ticket[] => {
  try {
    const savedTickets = localStorage.getItem(STORAGE_KEYS.TICKETS);
    return savedTickets ? JSON.parse(savedTickets) : [];
  } catch (error) {
    console.error('Error loading tickets:', error);
    return [];
  }
};

export const saveTickets = (tickets: Ticket[]): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.TICKETS, JSON.stringify(tickets));
  } catch (error) {
    console.error('Error saving tickets:', error);
  }
};

export const calculateTicketStats = (tickets: Ticket[]): TicketStats => {
  return {
    total: tickets.length,
    open: tickets.filter(ticket => ticket.status === 'open').length,
    inProgress: tickets.filter(ticket => ticket.status === 'in_progress').length,
    closed: tickets.filter(ticket => ticket.status === 'closed').length
  };
};

export const getStatusColor = (status: string): string => {
  switch (status) {
    case 'open':
      return 'status-open';
    case 'in_progress':
      return 'status-in-progress';
    case 'closed':
      return 'status-closed';
    default:
      return 'status-open';
  }
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high':
      return 'text-danger-600 bg-danger-100';
    case 'medium':
      return 'text-warning-600 bg-warning-100';
    case 'low':
      return 'text-success-600 bg-success-100';
    default:
      return 'text-warning-600 bg-warning-100';
  }
};
