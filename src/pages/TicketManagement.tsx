import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import { Card, Button, Input, Textarea, Select, Modal } from '../components/ui';
import { Navigation } from '../components/layout';
import { useTickets } from '../hooks/useTickets';
import { useFormValidation } from '../hooks/useFormValidation';
import type { Ticket, TicketFormData } from '../types';
import { getStatusColor, getPriorityColor } from '../utils/ticketUtils';
import { TICKET_STATUSES, TICKET_PRIORITIES } from '../constants';

const TicketManagement: React.FC = () => {
  const { user, logout } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [formData, setFormData] = useState<TicketFormData>({
    title: '',
    description: '',
    status: 'open',
    priority: 'medium'
  });
  const { tickets, updateTickets } = useTickets();
  const { errors, validateTicket, clearErrors } = useFormValidation();

  const validateForm = () => {
    return validateTicket(formData.title, formData.status);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const now = new Date().toISOString();
    
    if (editingTicket) {
      // Update existing ticket
      const updatedTickets = tickets.map(ticket =>
        ticket.id === editingTicket.id
          ? {
              ...ticket,
              ...formData,
              updatedAt: now
            }
          : ticket
      );
      updateTickets(updatedTickets);
      toast.success('Ticket updated successfully!');
    } else {
      // Create new ticket
      const newTicket: Ticket = {
        id: uuidv4(),
        ...formData,
        createdAt: now,
        updatedAt: now
      };
      updateTickets([...tickets, newTicket]);
      toast.success('Ticket created successfully!');
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      status: 'open',
      priority: 'medium'
    });
    clearErrors();
    setEditingTicket(null);
    setIsModalOpen(false);
  };

  const handleEdit = (ticket: Ticket) => {
    setFormData({
      title: ticket.title,
      description: ticket.description,
      status: ticket.status,
      priority: ticket.priority
    });
    setEditingTicket(ticket);
    setIsModalOpen(true);
  };

  const handleDelete = (ticketId: string) => {
    if (window.confirm('Are you sure you want to delete this ticket?')) {
      const updatedTickets = tickets.filter(ticket => ticket.id !== ticketId);
      updateTickets(updatedTickets);
      toast.success('Ticket deleted successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <Navigation
        user={user}
        onLogout={logout}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        currentPage="tickets"
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Ticket Management</h1>
            <p className="mt-2 text-gray-600">
              Create, view, edit, and delete tickets
            </p>
          </div>
          <div>
            <Button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto whitespace-nowrap"
            >
              Create Ticket
            </Button>
          </div>
        </div>

        {/* Tickets Grid */}
        {tickets.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No tickets</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new ticket.</p>
            <div className="mt-6">
              <Button
                onClick={() => setIsModalOpen(true)}
              >
                Create Ticket
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <Card key={ticket.id} hover>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
                    {ticket.title}
                  </h3>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleEdit(ticket)}
                      className="text-primary-600 hover:text-primary-800 transition-colors"
                      title="Edit ticket"
                      aria-label={`Edit ticket: ${ticket.title}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDelete(ticket.id)}
                      className="text-danger-600 hover:text-danger-800 transition-colors"
                      title="Delete ticket"
                      aria-label={`Delete ticket: ${ticket.title}`}
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>

                {ticket.description && (
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {ticket.description}
                  </p>
                )}

                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                    {ticket.status.replace('_', ' ')}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </div>

                <div className="text-xs text-gray-500">
                  <p>Created: {new Date(ticket.createdAt).toLocaleDateString()}</p>
                  <p>Updated: {new Date(ticket.updatedAt).toLocaleDateString()}</p>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={resetForm}
        title={editingTicket ? 'Edit Ticket' : 'Create New Ticket'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            id="title"
            label="Title *"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter ticket title"
            error={errors.title}
          />

          <Textarea
            id="description"
            label="Description"
            rows={3}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Enter ticket description"
          />

          <Select
            id="status"
            label="Status *"
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as 'open' | 'in_progress' | 'closed' })}
            options={TICKET_STATUSES.map(status => ({
              value: status,
              label: status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
            }))}
            error={errors.status}
          />

          <Select
            id="priority"
            label="Priority"
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'low' | 'medium' | 'high' })}
            options={TICKET_PRIORITIES.map(priority => ({
              value: priority,
              label: priority.charAt(0).toUpperCase() + priority.slice(1)
            }))}
          />

          <div className="flex justify-end space-x-3 pt-4">
            <Button
              type="button"
              variant="secondary"
              onClick={resetForm}
            >
              Cancel
            </Button>
            <Button
              type="submit"
            >
              {editingTicket ? 'Update Ticket' : 'Create Ticket'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TicketManagement;
