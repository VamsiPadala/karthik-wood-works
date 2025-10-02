import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle, Facebook } from 'lucide-react';

// AccordionItem component for FAQ
function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
      <button
        className="w-full flex items-center justify-between px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-zinc-800"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <span className="font-semibold text-amber-700 dark:text-amber-600 text-left">{question}</span>
        <span className="ml-4 text-amber-700 dark:text-amber-600 text-xl font-bold transition-transform duration-200">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div 
          id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
          className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed animate-fade-in"
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    fullname: '',
    phonenumber: '',
    email: '',
    item: 'Contact Message',
    address: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ 
      ...prev, 
      [name]: value 
    }));
    // Clear errors when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!form.fullname.trim()) {
      return 'Full name is required';
    }
    if (!form.email.trim()) {
      return 'Email address is required';
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      return 'Please enter a valid email address';
    }
    if (form.phonenumber && !/^[\+]?[1-9][\d]{0,15}$/.test(form.phonenumber.replace(/\s/g, ''))) {
      return 'Please enter a valid phone number';
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      toast.error(validationError);
      return;
    }

    setSubmitting(true);
    setSuccess(false);
    setError('');

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbyopTtHYUZG36XkqNFlz07dni9qklpaqdIHRlefjoEgTIFfaE88itFcKBB9jVhAETvcQQ/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });
      
      setSuccess(true);
      setForm({ 
        fullname: '', 
        phonenumber: '', 
        email: '', 
        item: 'Contact Message', 
        address: '' 
      });
      toast.success('Message sent successfully! We will get back to you soon.');
      
    } catch (err) {
      setError('Failed to send message. Please try again later.');
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Instagram,
      title: 'Instagram',
      content: [
        { label: 'Karthik_woodworks_47', link: 'https://instagram.com/Karthik_woodworks_47' }
      ],
      subtext: 'Follow us for latest updates and designs',
      color: 'bg-gradient-to-r from-pink-400 to-purple-400 text-white',
      isLink: true
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: [
        { label: '+91 79815 11748', link: 'https://wa.me/917981511748' },
        { label: '+91 90105 64625', link: 'https://wa.me/919010564625' }
      ],
      subtext: 'Available on WhatsApp',
      color: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      isLink: true
    },
    {
      icon: Phone,
      title: 'Mobile',
      content: [
        { label: '+91 79815 11748', link: 'tel:+917981511748' },
        { label: '+91 90105 64625', link: 'tel:+919010564625' }
      ],
      subtext: 'Call or WhatsApp us',
      color: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      isLink: true
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Karthikwoodworks47@gmail.com',
      link: 'mailto:Karthikwoodworks47@gmail.com',
      subtext: 'We reply within 24 hours',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
    },
    {
      icon: MapPin,
      title: 'Address',
      content: (
        <div className="leading-relaxed">
          Near High School,<br />
          Babu Jagadgivanrao Street,<br />
          Kannapuram, Koyyalagudem Mandalam,<br />
          <span className="font-bold">534311</span>
        </div>
      ),
      subtext: 'Visit our workshop for custom designs',
      color: 'bg-gradient-to-r from-amber-200 to-orange-300 text-amber-900 dark:text-amber-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with beautiful wooden furniture? Get in touch with us today 
            for a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg bg-white dark:bg-zinc-900">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-gray-900 dark:text-white">
                  Send Us a Message
                </CardTitle>
                <p className="text-muted-foreground mt-2">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullname" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="fullname"
                        name="fullname"
                        type="text"
                        placeholder="Your full name"
                        value={form.fullname}
                        onChange={handleChange}
                        required
                        className="w-full"
                        disabled={submitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phonenumber" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phonenumber"
                        name="phonenumber"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phonenumber}
                        onChange={handleChange}
                        className="w-full"
                        disabled={submitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full"
                      disabled={submitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                      Address
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Your address"
                      value={form.address}
                      onChange={handleChange}
                      className="w-full"
                      disabled={submitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="item" className="text-sm font-medium">
                      Purpose
                    </Label>
                    <Input
                      id="item"
                      name="item"
                      value={form.item}
                      onChange={handleChange}
                      className="w-full bg-gray-50 dark:bg-zinc-800"
                      readOnly
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white transition-colors duration-200"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </span>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  
                  {error && (
                    <div className="mt-4 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                      <p className="text-red-600 dark:text-red-400 text-sm text-center">{error}</p>
                    </div>
                  )}
                  
                  {success && (
                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                      <p className="text-green-600 dark:text-green-400 text-sm text-center">
                        Message sent successfully! We will get back to you soon.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-0 shadow-md bg-white dark:bg-zinc-900 transition-shadow duration-200 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${info.color} shadow-sm`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">
                          {info.title}
                        </h3>
                        {info.isLink ? (
                          <div className="text-sm mb-1 flex flex-col gap-1">
                            {info.content.map((item, i) => (
                              <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-700 dark:text-amber-600 underline hover:text-amber-900 dark:hover:text-amber-500 transition-colors duration-200 break-words"
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        ) : info.link ? (
                          <a
                            href={info.link}
                            className="text-sm mb-1 text-amber-700 dark:text-amber-600 underline hover:text-amber-900 dark:hover:text-amber-500 transition-colors duration-200 break-words"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-sm mb-1 text-gray-600 dark:text-gray-300">
                            {info.content}
                          </div>
                        )}
                        <p className="text-xs text-muted-foreground mt-2">
                          {info.subtext}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Media */}
            <Card className="border-0 shadow-md bg-white dark:bg-zinc-900">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="https://instagram.com/Karthik_woodworks_47" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
                    aria-label="Visit our Instagram page"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section as Accordion */}
        <Card className="border-0 shadow-lg bg-white dark:bg-zinc-900">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-center text-gray-900 dark:text-white">
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  q: 'What is your typical delivery time?',
                  a: 'Delivery time varies based on the complexity of the project. Simple items take 1-2 weeks, while custom designs may take 3-4 weeks.'
                },
                {
                  q: 'Do you provide installation services?',
                  a: 'Yes, we provide professional installation services for all our furniture pieces at your location.'
                },
                {
                  q: 'What types of wood do you work with?',
                  a: 'We work with various types of wood including teak, oak, pine, mahogany, and other premium woods based on your preferences.'
                },
                {
                  q: 'Do you offer warranties on your furniture?',
                  a: 'Yes, we provide warranties on our craftsmanship and offer maintenance services to keep your furniture in excellent condition.'
                }
              ].map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  question={faq.q} 
                  answer={faq.a} 
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}