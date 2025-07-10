import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Award, MessageSquare, Users, Plus } from 'lucide-react';
import Navbar from '@/components/Navbar';

const Dashboard: React.FC = () => {
  const userRole = 'student'; // Mock user role
  const userName = 'John Doe'; // Mock user name

  const studentSidebarItems = [
    { icon: BookOpen, label: 'My Courses', count: 3 },
    { icon: Award, label: 'Certificates', count: 2 },
    { icon: MessageSquare, label: 'Discussions', count: 5 }
  ];

  const instructorSidebarItems = [
    { icon: BookOpen, label: 'My Courses', count: 8 },
    { icon: Plus, label: 'Create Course' },
    { icon: Users, label: 'Students', count: 124 }
  ];

  const sidebarItems = userRole === 'instructor' ? instructorSidebarItems : studentSidebarItems;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        <aside className="w-64 bg-white shadow-sm min-h-screen p-4">
          <nav className="space-y-2">
            {sidebarItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start"
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                  {item.count && (
                    <span className="ml-auto bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                      {item.count}
                    </span>
                  )}
                </Button>
              );
            })}
          </nav>
        </aside>
        
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {userName}!
            </h1>
            <p className="text-gray-600">Here's what's happening with your learning journey.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">You completed "React Basics" yesterday</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">New assignment available in Data Science course</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">You're 75% through your current course</p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;