
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function OrderNowModal({ isOpen, onClose, productName }) {
  const [form, setForm] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    item: productName || '',
    address: ''
  });

  // Update item field if productName changes (e.g., when opening modal for a different product)
  useEffect(() => {
    setForm((prev) => ({ ...prev, item: productName || '' }));
  }, [productName, isOpen]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    try {
      await fetch('https://script.google.com/macros/s/AKfycbyopTtHYUZG36XkqNFlz07dni9qklpaqdIHRlefjoEgTIFfaE88itFcKBB9jVhAETvcQQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      setSuccess(true);
      setForm({ fullname: '', phonenumber: '', email: '', item: productName || '', address: '' });
    } catch (err) {
      // no error handling due to no-cors
    }
    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-6 text-center">Order Now</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <Input name="fullname" placeholder="Full Name" value={form.fullname} onChange={handleChange} required />
          <Input name="phonenumber" placeholder="Phone Number" value={form.phonenumber} onChange={handleChange} required />
          <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <Input name="item" placeholder="Item" value={form.item} onChange={handleChange} required />
          <Input name="address" placeholder="Address" value={form.address} onChange={handleChange} required />
          <Button type="submit" className="w-full" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit'}</Button>
        </form>
        {success && <div className="mt-4 text-green-600 text-center">Order submitted successfully!</div>}
      </div>
    </div>
  );
}
