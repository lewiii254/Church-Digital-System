
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DollarSign, CreditCard, Repeat, Calendar, BarChart, HeartHandshake, Building, Crop } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Give = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Give to Wonders of God Church</h1>
          <p className="text-xl max-w-3xl mx-auto">Your generous giving helps us continue our mission of spreading God's love and serving our community</p>
        </div>
      </div>

      {/* Biblical Teaching on Giving */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why We Give</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, 
              for God loves a cheerful giver." — 2 Corinthians 9:7
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <HeartHandshake className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Act of Worship</h3>
                <p className="text-gray-600">
                  Giving is an expression of worship and gratitude to God for His blessings in our lives. 
                  It's a tangible way we acknowledge that everything we have comes from Him.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-amber-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Build the Kingdom</h3>
                <p className="text-gray-600">
                  Your giving enables the church to fulfill its mission through ministry programs, 
                  community outreach, supporting missions, and maintaining facilities for worship and service.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Crop className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Spiritual Growth</h3>
                <p className="text-gray-600">
                  Giving helps us grow spiritually by teaching us to trust God with our finances, 
                  cultivating generosity, and freeing us from materialism.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Online Giving Options */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ways to Give</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the giving method that works best for you
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Online Giving Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <CreditCard className="mr-3 h-6 w-6 text-blue-600" />
                Online Giving
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                    Amount (KSh)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      type="number"
                      id="amount"
                      className="pl-10"
                      placeholder="Enter amount"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Giving Type
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-colors">
                      <input
                        type="radio"
                        id="tithe"
                        name="giving-type"
                        className="sr-only"
                        defaultChecked
                      />
                      <label htmlFor="tithe" className="flex items-center cursor-pointer">
                        <span className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        </span>
                        <span className="font-medium">Tithe</span>
                      </label>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-colors">
                      <input
                        type="radio"
                        id="offering"
                        name="giving-type"
                        className="sr-only"
                      />
                      <label htmlFor="offering" className="flex items-center cursor-pointer">
                        <span className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-transparent"></span>
                        </span>
                        <span className="font-medium">Offering</span>
                      </label>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-colors">
                      <input
                        type="radio"
                        id="building"
                        name="giving-type"
                        className="sr-only"
                      />
                      <label htmlFor="building" className="flex items-center cursor-pointer">
                        <span className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-transparent"></span>
                        </span>
                        <span className="font-medium">Building Fund</span>
                      </label>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-colors">
                      <input
                        type="radio"
                        id="missions"
                        name="giving-type"
                        className="sr-only"
                      />
                      <label htmlFor="missions" className="flex items-center cursor-pointer">
                        <span className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-transparent"></span>
                        </span>
                        <span className="font-medium">Missions</span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Frequency
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-colors">
                      <input
                        type="radio"
                        id="one-time"
                        name="frequency"
                        className="sr-only"
                        defaultChecked
                      />
                      <label htmlFor="one-time" className="flex items-center cursor-pointer">
                        <span className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="h-4 w-4 mr-1 text-gray-600" />
                          <span className="font-medium">One-time</span>
                        </span>
                      </label>
                    </div>
                    <div className="border border-gray-200 rounded-md p-4 cursor-pointer hover:border-blue-600 hover:bg-blue-50 transition-colors">
                      <input
                        type="radio"
                        id="recurring"
                        name="frequency"
                        className="sr-only"
                      />
                      <label htmlFor="recurring" className="flex items-center cursor-pointer">
                        <span className="h-4 w-4 rounded-full border border-gray-400 flex items-center justify-center mr-3">
                          <span className="h-2 w-2 rounded-full bg-transparent"></span>
                        </span>
                        <span className="flex items-center">
                          <Repeat className="h-4 w-4 mr-1 text-gray-600" />
                          <span className="font-medium">Recurring</span>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Continue to Payment
                </Button>
                
                <div className="flex items-center justify-center space-x-4">
                  <img src="https://cdn-icons-png.flaticon.com/128/174/174861.png" alt="Mpesa" className="h-8" />
                  <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="Visa" className="h-8" />
                  <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="MasterCard" className="h-8" />
                </div>
              </form>
            </div>
            
            {/* Alternative Giving Methods */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                  Mobile Money
                </h3>
                <p className="text-gray-600 mb-6">
                  Send your contribution directly to our church M-Pesa Paybill number:
                </p>
                <div className="bg-blue-50 p-4 rounded-md mb-6">
                  <p className="font-bold text-gray-800">Paybill Number: <span className="text-blue-600">123456</span></p>
                  <p className="font-bold text-gray-800">Account: <span className="text-blue-600">Your Name</span></p>
                </div>
                <p className="text-sm text-gray-600">
                  Please include your name and purpose of giving (e.g., "John Doe - Tithe") as the account name.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                  <Building className="mr-3 h-6 w-6 text-blue-600" />
                  Bank Transfer
                </h3>
                <p className="text-gray-600 mb-6">
                  You can make a direct bank transfer to our church account:
                </p>
                <div className="bg-blue-50 p-4 rounded-md space-y-2 mb-6">
                  <p className="font-medium text-gray-800">Bank Name: <span className="text-blue-600">Kenya Commercial Bank (KCB)</span></p>
                  <p className="font-medium text-gray-800">Account Name: <span className="text-blue-600">Wonders of God Church</span></p>
                  <p className="font-medium text-gray-800">Account Number: <span className="text-blue-600">1234567890</span></p>
                  <p className="font-medium text-gray-800">Branch: <span className="text-blue-600">Embu Town</span></p>
                </div>
                <p className="text-sm text-gray-600">
                  Please include your name and purpose of giving in the transfer reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Giving Impact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Giving Makes a Difference</h2>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              See how your generous contributions are transforming lives in our church and community
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-300 mb-2">150+</div>
              <p className="text-lg">Children supported through our education program</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-300 mb-2">500+</div>
              <p className="text-lg">Families received food assistance last year</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-300 mb-2">3</div>
              <p className="text-lg">Community outreach centers established</p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
              <div className="text-4xl font-bold text-amber-300 mb-2">24/7</div>
              <p className="text-lg">Prayer and counseling support available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Accountability */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Financial Accountability</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to transparency and responsible stewardship of all resources entrusted to us
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 shadow-md">
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <BarChart className="mr-2 h-5 w-5 text-blue-600" />
                  How Your Gifts Are Used
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-600 mr-3"></div>
                    <span className="text-gray-700"><strong>40%</strong> - Local Ministry & Outreach Programs</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-600 mr-3"></div>
                    <span className="text-gray-700"><strong>25%</strong> - Facilities & Operations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-amber-600 mr-3"></div>
                    <span className="text-gray-700"><strong>15%</strong> - Missions & Global Partners</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-purple-600 mr-3"></div>
                    <span className="text-gray-700"><strong>10%</strong> - Staff & Administration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-red-600 mr-3"></div>
                    <span className="text-gray-700"><strong>10%</strong> - Building Fund & Future Growth</span>
                  </li>
                </ul>
              </div>
              
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Our Commitment</h3>
                <p className="text-gray-600 mb-4">
                  Wonders of God Church is committed to financial integrity and accountability. 
                  Our financial statements are reviewed annually by an independent accounting firm, 
                  and financial reports are available to church members.
                </p>
                <p className="text-gray-600">
                  Questions about church finances? Contact our church treasurer at 
                  <span className="text-blue-600"> treasurer@wondersofgod.org</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about giving to Wonders of God Church
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Is my giving tax-deductible?</h3>
                <p className="text-gray-600">
                  Yes, Wonders of God Church is a registered non-profit organization, and your contributions 
                  are tax-deductible to the extent allowed by law. We provide annual giving statements for tax purposes.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">How secure is online giving?</h3>
                <p className="text-gray-600">
                  Our online giving platform uses industry-standard encryption and security protocols to ensure 
                  that your financial information is protected. We do not store your credit card or banking details.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Can I designate my gift for a specific purpose?</h3>
                <p className="text-gray-600">
                  Yes, you can designate your gift for specific funds such as tithes, offerings, building fund, 
                  missions, or special projects. Please indicate your preference during the giving process.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">How do I set up recurring giving?</h3>
                <p className="text-gray-600">
                  You can set up recurring giving through our online platform by selecting the "Recurring" option 
                  and choosing your preferred frequency (weekly, bi-weekly, monthly). This helps you maintain consistency 
                  in your giving commitment.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">What is the biblical basis for tithing?</h3>
                <p className="text-gray-600">
                  Tithing (giving 10% of one's income) has its roots in the Old Testament (Leviticus 27:30, Malachi 3:10). 
                  In the New Testament, Jesus affirmed the practice (Matthew 23:23), and Christians are encouraged to give 
                  generously and cheerfully (2 Corinthians 9:6-7).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Give;
