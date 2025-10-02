import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Award, Users, Clock, Wrench, Heart, Shield, Sparkles } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We use only the finest quality wood and materials for all our furniture pieces, ensuring durability and longevity.'
    },
    {
      icon: Users,
      title: 'Experienced Craftsmen',
      description: 'Our skilled team has years of experience in both traditional and modern woodworking techniques.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We respect your time and ensure all projects are completed within the promised timeframe.'
    },
    {
      icon: Wrench,
      title: 'Custom Solutions',
      description: 'Every piece can be tailored to match your specific requirements, space, and personal style.'
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We work closely with you to bring your vision to life.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Rigorous quality checks ensure every piece meets our high standards before delivery.'
    },
    {
      icon: Sparkles,
      title: 'Attention to Detail',
      description: 'Meticulous craftsmanship and fine finishing touches set our furniture apart.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '500+', label: 'Projects Completed' },
    { number: '100%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-amber-50 dark:from-zinc-950 dark:to-amber-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm font-medium bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
            Crafting Excellence Since 2013
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-8 tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
              Karthik Wood Works
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Specializing in handcrafted wooden furniture that blends traditional craftsmanship with contemporary design. 
            We deliver premium quality at affordable prices, creating pieces that become family heirlooms.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-white/70 dark:bg-zinc-900/70 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-2xl lg:text-3xl font-bold text-amber-700 dark:text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                Our Woodworking Journey
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full"></div>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Founded with a deep passion for woodworking, <strong>Karthik Wood Works</strong> has been 
                transforming spaces with beautiful, functional furniture for over a decade. What started 
                as a small workshop has grown into a trusted name known for quality and craftsmanship.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that furniture should tell a story - your story. Each piece we create is 
                meticulously crafted to not just fill a space, but to enhance it with character, 
                warmth, and timeless beauty that lasts for generations.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Our workshop harmoniously blends time-honored woodworking traditions with modern 
                techniques and tools. This unique approach allows us to create furniture that 
                maintains the soul of handcrafted pieces while meeting contemporary standards 
                of precision and durability.
              </p>

              <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mt-6">
                <p className="text-amber-800 dark:text-amber-200 font-medium italic text-center">
                  "We don't just build furniture; we create the foundations for your family's memories."
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 shadow-2xl">
              <img
                src="https://res.cloudinary.com/daaizwbdw/image/upload/v1759215215/Screenshot_2025-09-30_122245_rkoi7z.png"
                alt="Karthik Wood Works - Master Craftsmen"
                className="w-full h-full object-contain p-8"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRkY5RjBGIi8+CjxwYXRoIGQ9Ik0xMDAgNTBDODkuNTIyOCA1MCA4MSA1OC41MjI4IDgxIDY5QzgxIDc5LjQ3NzIgODkuNTIyOCA4OCAxMDAgODhDMTEwLjQ3NyA4OCAxMTkgNzkuNDc3MiAxMTkgNjlDMTE5IDU4LjUyMjggMTEwLjQ3NyA1MCAxMDAgNTBaTTEwMCAxMTJDNzcuOTA5IDExMiA2MCAxMjkuOTA5IDYwIDE1MlYxNzBIMTQwVjE1MkMxNDAgMTI5LjkwOSAxMjIuMDkgMTEyIDEwMCAxMTJaIiBmaWxsPSIjRDkzODVGIi8+Cjwvc3ZnPgo=';
                }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-amber-200 dark:bg-amber-800 rounded-full opacity-50"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-200 dark:bg-orange-800 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Karthik Wood Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover what makes our furniture and service stand out from the rest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="text-center border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:-translate-y-2 group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-amber-700 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-black/10"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="leading-relaxed text-amber-50 text-lg">
                To create exceptional wooden furniture that combines traditional craftsmanship with modern design, 
                making quality furniture accessible to everyone without compromising on excellence, durability, or aesthetic appeal.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900 to-zinc-800 text-white overflow-hidden relative">
            <div className="absolute inset-0 bg-white/5"></div>
            <CardContent className="p-10 relative z-10">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="leading-relaxed text-gray-200 text-lg">
                To become the most trusted name in wooden furniture, known for our commitment to quality, 
                sustainability, and customer satisfaction while preserving and evolving traditional woodworking heritage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Commitment Section */}
        <Card className="border-0 shadow-2xl bg-white dark:bg-zinc-900 text-center">
          <CardContent className="p-12">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Commitment to You
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              We stand behind every piece we create. From the initial design consultation to the final delivery, 
              we're committed to ensuring your complete satisfaction and creating furniture that you'll love for years to come.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full mx-auto"></div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}