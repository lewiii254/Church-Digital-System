
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedSermon: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Message</h2>
          <p className="text-xl text-gray-600">This week's inspiring sermon</p>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="relative pb-[56.25%] h-0">
                <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1447933601403-0c6688de566e" 
                    alt="Pastor preaching" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-16 h-16 flex items-center justify-center"
                      aria-label="Play sermon video"
                    >
                      <Play size={28} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Walking in Divine Favor</h3>
              <p className="text-gray-500 mb-4">Pastor James Mwangi • May 19, 2024</p>
              <p className="text-gray-600 mb-6">
                Discover how to position yourself for God's supernatural favor in every area of your life.
                This powerful message explores biblical principles that unlock divine blessings and favor.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Faith</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Blessings</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Favor</span>
              </div>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="flex items-center">
                  <Play className="mr-1 h-4 w-4" />
                  Watch
                </Button>
                <Button variant="outline" size="sm">Download Notes</Button>
                <Link to="/sermons">
                  <Button variant="link" size="sm">All Sermons</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSermon;
