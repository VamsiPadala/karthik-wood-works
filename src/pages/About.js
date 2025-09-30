import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Award, Users, Clock, Wrench } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest quality wood and materials for all our furniture pieces.'
    },
    {
      icon: Users,
      title: 'Experienced Craftsmen',
      description: 'Our team has years of experience in traditional and modern woodworking techniques.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We ensure all projects are completed and delivered within the promised timeframe.'
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Every piece can be customized to match your specific requirements and space.'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-6 py-3">
            About Us
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">
            About{' '}
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
              Karthik Wooden Works
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Specializing in handcrafted wooden furniture, delivering premium quality at low prices. 
            With years of experience, we bring tradition, craftsmanship, and durability into every piece we make.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded with a passion for creating beautiful, functional furniture, Karthik Wooden Works has been 
              serving customers with dedication and craftsmanship that spans generations. We believe that furniture 
              is more than just functional pieces - they are the foundation of memories and comfort in your home.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our workshop combines traditional woodworking techniques with modern tools and technology, ensuring 
              each piece is built to last while maintaining the authentic charm of handcrafted furniture.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We take pride in our ability to transform raw wood into beautiful, functional pieces that our 
              customers will cherish for years to come. Every grain, every joint, and every finish is carefully 
              considered to create furniture that tells a story.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/daaizwbdw/image/upload/v1759215215/Screenshot_2025-09-30_122245_rkoi7z.png"
              alt="Karthik Wooden Works Logo"
              className="h-40 w-40 object-contain rounded-full bg-white shadow mx-auto"
              style={{ background: 'white' }}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-6 w-6 text-amber-700" />
                    </div>
                    <h3 className="text-lg font-semibold mb-4">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-6 text-amber-700">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To create exceptional wooden furniture that combines traditional craftsmanship with modern design, 
                making quality furniture accessible to everyone without compromising on excellence.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950 dark:to-amber-950">
            <CardContent className="p-10">
              <h3 className="text-2xl font-bold mb-6 text-orange-700">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted name in wooden furniture, known for our commitment to quality, 
                sustainability, and customer satisfaction while preserving traditional woodworking heritage.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}