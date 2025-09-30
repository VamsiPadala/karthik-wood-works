import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export const CustomDesignModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    itemType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const itemTypes = [
    'Dining Table',
    'Dining Chairs',
    'Sofa Set',
    'Coffee Table',
    'Bedroom Furniture',
    'Office Furniture',
    'Storage Solutions',
    'Custom Design',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      itemType: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.itemType) {
      toast.error('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      toast.success('Custom design request submitted successfully! We\'ll contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        address: '',
        itemType: '',
        description: ''
      });
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-amber-700">
            Request Custom Design
          </DialogTitle>
          <p className="text-muted-foreground">
            Tell us about your custom furniture requirements and we'll create a personalized design just for you.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              name="address"
              placeholder="Your complete address for delivery/consultation"
              rows={3}
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="itemType">Type of Item *</Label>
            <Select value={formData.itemType} onValueChange={handleSelectChange} required>
              <SelectTrigger>
                <SelectValue placeholder="Select furniture type" />
              </SelectTrigger>
              <SelectContent>
                {itemTypes.map(type => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description & Requirements</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe your custom design requirements, dimensions, preferred wood type, style preferences, budget range, etc."
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              type="submit"
              size="lg"
              className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Submitting...'
              ) : (
                <>
                  Submit Request <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};