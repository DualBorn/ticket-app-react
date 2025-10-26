import { useState, useEffect } from 'react';
import type { Ticket, TicketStats } from '../types';
import { loadTickets, saveTickets, calculateTicketStats } from '../utils/ticketUtils';

export const useTickets = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [stats, setStats] = useState<TicketStats>({
    total: 0,
    open: 0,
    inProgress: 0,
    closed: 0
  });

  useEffect(() => {
    const loadedTickets = loadTickets();
    setTickets(loadedTickets);
    setStats(calculateTicketStats(loadedTickets));
  }, []);

  const updateTickets = (newTickets: Ticket[]) => {
    saveTickets(newTickets);
    setTickets(newTickets);
    setStats(calculateTicketStats(newTickets));
  };

  return { tickets, stats, updateTickets };
};
