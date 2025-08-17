import React from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Headphones, Globe } from 'lucide-react';

const ContactPage = () => {

  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Support",
      info: "amitagujar@gmail.com",
      description: "Get help with technical issues and general inquiries",
      available: "24/7 response within 4 hours"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Live Chat",
      info: "Chat with our team",
      description: "Instant support for urgent issues and quick questions",
      available: "Available 24/7"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Support",
      info: "+91-7020903702",
      description: "Direct line to our technical support specialists",
      available: "Mon-Fri 9AM-6PM IST"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Enterprise Support",
      info: "amitagujar@gmail.com",
      description: "Dedicated support for enterprise customers",
      available: "Priority 24/7 support"
    }
  ];

  const offices = [
    {
      city: "PUNE",
      address: "BAVDHAN,Maharashtra,India",
      phone: "+91-7020903702",
      hours: "Mon-Fri 9AM-6PM IST"
    }
    
  ];

  const supportChannels = [
    { name: "Documentation", description: "Comprehensive guides and API reference", url: "#" },
    { name: "Community Forum", description: "Connect with other developers and researchers", url: "#" },
    { name: "Status Page", description: "Real-time platform status and incident reports", url: "#" },
    { name: "GitHub", description: "Open source tools and examples", url: "#" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Get in</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Our team is here to help you get the most out of Zetta GPU. 
              Whether you're a GPU provider or LLM user, we're ready to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white/70 border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form action="https://formsubmit.co/amitgujarjio@gmail.com" method="POST" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                    I am a...
                  </label>
                  <select
                    name="userType"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                  >
                    <option value="llm-user">LLM/AI User</option>
                    <option value="gpu-provider">GPU Provider</option>
                    <option value="enterprise">Enterprise Customer</option>
                    <option value="researcher">Academic Researcher</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                 <input type="hidden" name="_next" value="https://example.com/thank-you" />
                 <input type="hidden" name="_subject" value="New message from Zetta GPU Contact Form" />
                 <input type="hidden" name="_captcha" value="false" />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30 flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Methods</h2>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="text-blue-600 mt-1">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{method.title}</h3>
                          <p className="text-blue-600 font-medium mb-2">{method.info}</p>
                          <p className="text-gray-700 text-sm mb-2">{method.description}</p>
                          <p className="text-purple-600 text-xs">{method.available}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Our <span className="text-purple-600">Locations</span>
            </h2>
            <p className="text-xl text-gray-700">
              Visit us at one of our global offices or connect with us remotely.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {offices.map((office, index) => (
              <div key={index} className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{office.city}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm leading-relaxed">{office.address}</p>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-purple-600 mr-2" />
                    <span className="text-purple-600 text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-blue-600 mr-2" />
                    <span className="text-blue-600 text-sm">{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Stay <span className="text-blue-600">Connected</span>
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on GPU availability, 
              new features, and AI industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-colors"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/30">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
