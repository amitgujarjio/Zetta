import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Zap, Shield, DollarSign, Activity, Users, Server, Clock } from 'lucide-react';
import StatsCounter from '../components/StatsCounter';

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "High-Performance GPUs",
      description: "Access to cutting-edge NVIDIA RTX 4090s, A100s, and H100s for maximum compute power."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Scaling",
      description: "Scale your workloads from 1 to 1000+ GPUs in seconds with our dynamic allocation system."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Military-grade encryption and isolation ensure your models and data remain secure."
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Cost Effective",
      description: "Pay only for what you use with transparent pricing up to 70% lower than cloud providers."
    }
  ];

  const stats = [
    { label: "Active GPUs", value: 10, icon: <Activity className="h-5 w-5" /> },
    { label: "Registered Users", value: 5, icon: <Users className="h-5 w-5" /> },
    { label: "Compute Hours", value: 1000, icon: <Clock className="h-5 w-5" /> },
    { label: "GPU Providers", value: 10, icon: <Server className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-50">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white opacity-90"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-ping"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-700 to-blue-600 bg-clip-text text-transparent">
                Revolutionary
              </span>
              <br />
              <span className="text-gray-900">GPU Sharing</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Platform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Connect GPU providers with AI researchers. Scale your machine learning workloads with 
              <span className="text-blue-600 font-semibold"> enterprise-grade infrastructure</span> at 
              <span className="text-purple-600 font-semibold"> revolutionary prices</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/users"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-105 flex items-center justify-center group"
              >
                Start Computing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/providers"
                className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-600/10 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-400/20 flex items-center justify-center group"
              >
                Share Your GPUs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Real-time Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-4 hover:border-blue-400/50 transition-all duration-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center mb-2 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    <StatsCounter end={stat.value} />
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Why Choose Zetta GPU?
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Built for the next generation of AI researchers and GPU providers seeking maximum performance and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/70 backdrop-blur-sm border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <div className="text-blue-600 mb-4 group-hover:text-blue-500 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Transform</span> Your AI Workflow?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of researchers and developers already using Zetta GPU for their machine learning projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/users"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-105"
              >
                Get Started Now
              </Link>
              <Link 
                to="/about"
                className="px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-700 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
