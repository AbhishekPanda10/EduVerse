import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Play, Search } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const courses = [
    {
      id: 1,
      title: 'React Development Masterclass',
      instructor: 'John Doe',
      rating: 4.8,
      price: 99,
      image: '/placeholder.svg',
      category: 'Programming'
    },
    {
      id: 2,
      title: 'Digital Marketing Fundamentals',
      instructor: 'Jane Smith',
      rating: 4.6,
      price: 79,
      image: '/placeholder.svg',
      category: 'Marketing'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      instructor: 'Mike Johnson',
      rating: 4.9,
      price: 129,
      image: '/placeholder.svg',
      category: 'Data Science'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">All Courses</h1>
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    size="sm"
                    className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
                  >
                    <Play className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary">{course.category}</Badge>
                </div>
                <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                <p className="text-sm text-gray-600 mb-2">by {course.instructor}</p>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">${course.price}</span>
                  <Button>Enroll Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;