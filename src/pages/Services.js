import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Hammer, Wrench, Home, DollarSign, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Custom Wooden Furniture Design',
      description: 'Personalized furniture designed to match your specific requirements and space. We work closely with you to understand your vision and create pieces that perfectly fit your home or office.',
      features: [
        'Personalized design consultation',
        'CAD drawings and 3D visualization',
        'Material selection guidance',
        'Space optimization solutions',
        'Style matching with existing decor'
      ],
      icon: Hammer,
      color: 'amber'
    },
    {
      id: 2,
      title: 'Furniture Repairs & Polishing',
      description: 'Professional restoration and polishing services to bring your furniture back to life. We handle everything from minor scratches to major structural repairs.',
      features: [
        'Scratch and dent repair',
        'Wood refinishing and staining',
        'Hardware replacement',
        'Structural reinforcement',
        'Protective coating application'
      ],
      icon: Wrench,
      color: 'orange'
    },
    {
      id: 3,
      title: 'Home & Office Furniture Setup',
      description: 'Complete furniture installation and setup services for homes and offices. Our team ensures proper assembly and placement for optimal functionality.',
      features: [
        'Professional assembly service',
        'Space planning and layout',
        'Installation and mounting',
        'Post-installation cleanup',
        'Warranty and maintenance guidance'
      ],
      icon: Home,
      color: 'yellow'
    },
    {
      id: 4,
      title: 'Affordable Pricing & Bulk Orders',
      description: 'Competitive pricing with special discounts for bulk orders and wholesale purchases. Perfect for hotels, restaurants, offices, and residential projects.',
      features: [
        'Volume-based pricing discounts',
        'Wholesale rates for businesses',
        'Flexible payment terms',
        'Project-based quotes',
        'Long-term partnership benefits'
      ],
      icon: DollarSign,
      color: 'green'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      amber: 'bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300',
      orange: 'bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300',
      yellow: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300',
      green: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
    };
    return colors[color] || colors.amber;
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
              Services We Offer
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From custom design to repairs and installation, we provide comprehensive wooden furniture services 
            to meet all your needs. Our experienced team is committed to delivering excellence in every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getColorClasses(service.color)}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                      What's Included:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full group">
                    Get Quote for This Service
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your needs and vision with our experts' },
              { step: '02', title: 'Design', desc: 'Create detailed plans and 3D visualizations' },
              { step: '03', title: 'Crafting', desc: 'Handcraft your furniture with precision and care' },
              { step: '04', title: 'Delivery', desc: 'Professional installation and setup at your location' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today to discuss your project. We'll provide you with a detailed quote and timeline for your furniture needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="text-lg px-8 py-6">
              <Link to="/contact">
                Get Free Consultation
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-amber-600">
              <Link to="/products">
                View Our Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}