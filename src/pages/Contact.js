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
  const [open, setOpen] = useState(false);
  return (
    <div className="border rounded-lg overflow-hidden bg-white dark:bg-zinc-900">
      <button
        className="w-full flex items-center justify-between px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className="font-semibold text-amber-700 text-left">{question}</span>
        <span className="ml-4 text-amber-700 text-xl font-bold">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed animate-fade-in">
          {answer}
        </div>
      )}
    </div>
  );
}


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call later)
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: [
        { label: '7981511748', link: 'https://wa.me/917981511748' },
        { label: '9010564625', link: 'https://wa.me/919010564625' }
      ],
      subtext: 'Available on WhatsApp',
      color: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      isLink: true
    },
    {
      icon: Phone,
      title: 'Mobile',
      content: [
        { label: '7981511748', link: 'tel:7981511748' },
        { label: '9010564625', link: 'tel:9010564625' }
      ],
      subtext: 'Call or WhatsApp us',
      color: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
      isLink: true
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@karthikwoodenworks.com',
      subtext: 'We reply within 24 hours',
      color: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '123 Woodcraft Street',
      subtext: 'Bangalore, Karnataka 560001',
      color: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Sat: 9:00 AM - 7:00 PM',
      subtext: 'Sunday: By appointment only',
      color: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Get In Touch
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your space with beautiful wooden furniture? Get in touch with us today 
            for a free consultation and personalized quote.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleInputChange}
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
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your furniture needs, preferred style, dimensions, timeline, and budget..."
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${info.color}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.isLink ? (
                          <div className="text-sm mb-1 flex flex-col gap-1">
                            {info.content.map((item, i) => (
                              <a
                                key={i}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-700 underline hover:text-amber-900"
                              >
                                {item.label}
                              </a>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm mb-1">{info.content}</p>
                        )}
                        <p className="text-xs text-muted-foreground">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Social Media */}
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#instagram" 
                    className="p-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a 
                    href="#whatsapp" 
                    className="p-3 rounded-full bg-green-500 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a 
                    href="#facebook" 
                    className="p-3 rounded-full bg-blue-600 text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section as Accordion */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Frequently Asked Questions</CardTitle>
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
                <AccordionItem key={index} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}