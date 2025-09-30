import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Search, Filter } from 'lucide-react';
import { products } from '../data/mockData';
import { CustomDesignModal } from '../components/CustomDesignModal';
import OrderNowModal from '../components/OrderNowModal';


export default function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [orderProductName, setOrderProductName] = useState('');

  const categories = ['all', ...new Set(products.map(product => product.category))];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-6 py-3 text-sm">
            Our Collection
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">
            <span className="bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
              Premium Wooden Furniture Collection
            </span>
          </h1>
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover our comprehensive collection of handcrafted wooden furniture, where each piece tells a story of traditional craftsmanship and modern elegance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From elegant dining sets to comfortable bedroom furniture, every item is carefully crafted using premium quality wood and finished to perfection. Our skilled artisans combine time-honored techniques with contemporary design to create furniture that enhances your living spaces.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're furnishing your home or office, our extensive range offers solutions for every room and every style preference, all at competitive prices without compromising on quality.
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-3 h-4 w-4 text-muted-foreground z-10" />
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48 pl-10 h-12">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-lg">
            Showing {filteredProducts.length} of {products.length} products
            {selectedCategory !== 'all' && ` in ${selectedCategory} category`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 bg-card">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <Badge variant="outline" className="mb-3">
                    {product.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-amber-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold py-3"
                    onClick={() => {
                      setOrderProductName(product.name);
                      setOrderModalOpen(true);
                    }}
                  >
                    Order Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-muted-foreground mb-6">
              No products found matching your criteria.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Don't see what you're looking for?
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            We specialize in custom furniture design tailored to your specific requirements. Let our skilled craftsmen create something unique and personalized just for you.
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            className="text-lg px-6 py-4 font-semibold bg-white text-amber-700 hover:bg-gray-100 w-full sm:w-auto"
            onClick={() => setIsCustomModalOpen(true)}
          >
            Request Custom Design
          </Button>
        </div>
      </div>

      {/* Custom Design Modal */}
      <CustomDesignModal 
        isOpen={isCustomModalOpen} 
        onClose={() => setIsCustomModalOpen(false)} 
      />

      {/* Order Now Modal */}
      <OrderNowModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        productName={orderProductName}
      />
    </div>
  );
}