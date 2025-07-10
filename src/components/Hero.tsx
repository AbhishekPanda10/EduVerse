import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Start Learning Today
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Join thousands of learners on EduVerse - the modern e-learning platform
          that connects students and instructors worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/courses">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Browse Courses
            </Button>
          </Link>
          <Link to="/register">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;