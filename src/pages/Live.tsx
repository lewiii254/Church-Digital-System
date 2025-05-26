
import React from 'react';
import { Play, Users, Calendar, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

const Live = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <Navigation />
      
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Live Service</h1>
          <p className="text-xl max-w-3xl mx-auto">Join us for worship, fellowship, and the Word of God from anywhere in the world.</p>
        </div>
      </div>

      {/* Live Stream Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black rounded-lg overflow-hidden shadow-xl mb-8">
            {/* Video Player Placeholder */}
            <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
              <div className="text-center text-white">
                <Play className="h-20 w-20 mx-auto mb-4 text-red-500" />
                <h3 className="text-2xl font-bold mb-2">Live Stream</h3>
                <p className="text-lg text-gray-300 mb-6">Service starts at 8:00 AM & 10:30 AM (EAT)</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Play className="mr-2 h-5 w-5" />
                    Watch Live
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Users className="mr-2 h-5 w-5" />
                    Join Chat
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Service Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5 text-blue-600" />
                  Service Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday Morning Service</span>
                    <span>8:00 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday Main Service</span>
                    <span>10:30 AM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Wednesday Bible Study</span>
                    <span>6:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Friday Prayer Meeting</span>
                    <span>7:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  Next Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-2">Sunday Service</p>
                  <p className="text-lg text-gray-600 mb-4">10:30 AM EAT</p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      Join us this Sunday as Bishop Wilson Muchangi shares from God's Word. 
                      Invite your friends and family to experience God's love with us.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* How to Watch */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>How to Watch Our Live Services</CardTitle>
              <CardDescription>Multiple ways to join us online</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-bold mb-2">YouTube Live</h3>
                  <p className="text-gray-600 text-sm">Watch on our official YouTube channel with live chat</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">Facebook Live</h3>
                  <p className="text-gray-600 text-sm">Join us on Facebook for interactive worship</p>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="font-bold mb-2">Watch Later</h3>
                  <p className="text-gray-600 text-sm">Missed the live service? Catch up anytime</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center bg-blue-600 text-white p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Can't Watch Live?</h2>
            <p className="text-lg mb-6">
              All our services are recorded and available for viewing anytime. 
              Visit our sermons page to catch up on previous messages.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                View Past Sermons
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Subscribe for Updates
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Live;
