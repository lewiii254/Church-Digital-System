
import React from 'react';
import { Church, Heart, Users, Calendar, Play, DollarSign, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Church className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-800">Grace Community Church</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#sermons" className="text-gray-700 hover:text-blue-600 transition-colors">Sermons</a>
              <a href="#giving" className="text-gray-700 hover:text-blue-600 transition-colors">Give</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1473177104440-ffee2f376098" 
              alt="Church Interior" 
              className="w-full h-96 object-cover rounded-2xl shadow-2xl mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
            Welcome to Our 
            <span className="text-blue-600"> Spiritual Home</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            A community united in faith, hope, and love. Join us as we grow together in Christ, 
            serve our neighbors, and make a difference in our world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <Calendar className="mr-2 h-5 w-5" />
              Join Us Sunday
            </Button>
            <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Watch Online
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            "To know Christ and make Him known through worship, fellowship, discipleship, and service. 
            We are committed to creating a welcoming community where everyone can experience God's love, 
            grow in faith, and discover their purpose in His kingdom."
          </p>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Our Community</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 50 years, we've been a beacon of hope and love in our community
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Love & Compassion</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  We believe in showing Christ's love through acts of compassion and kindness to all people.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Community</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Building authentic relationships and supporting one another through life's joys and challenges.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <Church className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                <CardTitle className="text-xl text-gray-800">Worship</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  Gathering together to praise God through music, prayer, and the study of His Word.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services & Events */}
      <section id="services" className="py-20 bg-white/50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Services & Events</h2>
            <p className="text-xl text-gray-600">Join us for worship, fellowship, and spiritual growth</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-800">
                  <Clock className="mr-3 h-6 w-6 text-blue-600" />
                  Sunday Worship
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join us every Sunday for inspiring worship, meaningful music, and biblical teaching.
                </p>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>9:00 AM</strong> - Traditional Service</p>
                  <p><strong>11:00 AM</strong> - Contemporary Service</p>
                  <p><strong>6:00 PM</strong> - Evening Service</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-gray-800">
                  <Calendar className="mr-3 h-6 w-6 text-green-600" />
                  Weekly Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm text-gray-700">
                  <p><strong>Wednesday 7:00 PM</strong> - Bible Study & Prayer</p>
                  <p><strong>Friday 6:30 PM</strong> - Youth Group</p>
                  <p><strong>Saturday 10:00 AM</strong> - Men's Fellowship</p>
                  <p><strong>Saturday 2:00 PM</strong> - Women's Ministry</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sermons */}
      <section id="sermons" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Recent Sermons</h2>
            <p className="text-xl text-gray-600">Grow in faith through God's Word</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Walking by Faith</CardTitle>
                <CardDescription className="text-gray-600">Pastor John Smith • March 17, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Exploring what it means to trust God completely, even when we can't see the path ahead.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Sermon
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Love Your Neighbor</CardTitle>
                <CardDescription className="text-gray-600">Pastor Sarah Johnson • March 10, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Understanding Christ's command to love others as ourselves in practical, everyday ways.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Sermon
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg text-gray-800">Hope in Times of Trial</CardTitle>
                <CardDescription className="text-gray-600">Pastor John Smith • March 3, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Finding strength and hope in God's promises during life's most difficult seasons.
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Sermon
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Giving */}
      <section id="giving" className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Support Our Ministry</h2>
          <p className="text-xl mb-8 opacity-90">
            Your generous giving helps us continue our mission of spreading God's love and serving our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <DollarSign className="mr-2 h-5 w-5" />
              Give Online
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              Learn About Tithing
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">We'd love to hear from you and answer any questions</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visit Us</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Address</h4>
                    <p className="text-gray-600">123 Faith Street<br />Your City, ST 12345</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <p className="text-gray-600">info@gracecommunitychurch.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed (Worship Days)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Church className="h-8 w-8 text-blue-400" />
                <span className="text-xl font-bold">Grace Community Church</span>
              </div>
              <p className="text-gray-300">
                A community united in faith, hope, and love, serving God and our neighbors with joy.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Service Times</a></li>
                <li><a href="#sermons" className="hover:text-blue-400 transition-colors">Sermons</a></li>
                <li><a href="#giving" className="hover:text-blue-400 transition-colors">Online Giving</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <p className="text-gray-300 mb-2">123 Faith Street, Your City, ST 12345</p>
              <p className="text-gray-300 mb-2">(555) 123-4567</p>
              <p className="text-gray-300">info@gracecommunitychurch.org</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Grace Community Church. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
