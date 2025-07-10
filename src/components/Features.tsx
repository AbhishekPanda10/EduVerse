import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Users, Award } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Learn',
      description: 'Access thousands of courses from expert instructors worldwide'
    },
    {
      icon: Users,
      title: 'Teach',
      description: 'Share your knowledge and earn by creating engaging courses'
    },
    {
      icon: Award,
      title: 'Certify',
      description: 'Get recognized with certificates upon course completion'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose EduVerse?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need for online learning and teaching
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;