import React from 'react';
import { Brain, Cpu, Globe, Shield, Users, TrendingUp, Code, Zap } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Amit Gujar",
      role: "CEO & Co-founder",
      background: "Former Capita Senior Executive - Ecommerce Product Management 11 years",
      image: "https://images.pexels.com/photos/3778966/pexels-photo-3778966.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    }
  ];

  const metrics = [
    { label: "GPU Hours Delivered", value: "2.8M+", icon: <Cpu className="h-6 w-6" /> },
    { label: "AI Models Trained", value: "45K+", icon: <Brain className="h-6 w-6" /> },
    { label: "Countries Served", value: "67", icon: <Globe className="h-6 w-6" /> },
    { label: "Uptime Guarantee", value: "99.9%", icon: <Shield className="h-6 w-6" /> }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Democratizing
              </span>
              <br />
              <span className="text-gray-900">AI Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Zetta GPU was founded with the vision of making high-performance computing accessible to everyone. 
              We're building the future of distributed AI infrastructure, one GPU at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Our <span className="text-blue-600">Mission</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We believe that access to powerful computing resources shouldn't be limited by budget or location. 
                Our mission is to create a decentralized network of GPU resources that empowers researchers, 
                developers, and organizations worldwide to push the boundaries of artificial intelligence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By connecting GPU owners with those who need compute power, we're creating a more efficient, 
                sustainable, and accessible AI ecosystem for everyone.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="text-blue-600 mb-3">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              How Our <span className="text-purple-600">Algorithm</span> Works
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our proprietary matching algorithm optimizes GPU allocation based on workload requirements, 
              provider capabilities, and network latency for maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Smart Matching</h3>
              <p className="text-gray-700">
                Our AI-powered algorithm matches workloads with optimal GPU configurations based on 
                performance requirements, budget, and geographical location.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-10 w-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dynamic Scaling</h3>
              <p className="text-gray-700">
                Automatically scale resources up or down based on demand, ensuring optimal performance 
                while minimizing costs through intelligent load balancing.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Execution</h3>
              <p className="text-gray-700">
                Enterprise-grade security with end-to-end encryption, isolated execution environments, 
                and comprehensive audit trails for all computations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Led by industry veterans from Tesla, Google, OpenAI, and Netflix, our team combines 
              decades of experience in AI, distributed systems, and scalable infrastructure.
            </p>
          </div>

          <div className="flex justify-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center group max-w-sm">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-200 group-hover:border-blue-600 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-400/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed">{member.background}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Infrastructure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Technical <span className="text-purple-600">Infrastructure</span>
              </h2>
              <p className="text-xl text-gray-700">
                Built on cutting-edge technology for maximum performance, security, and reliability.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-purple-400/50 transition-all duration-300">
                <Code className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Advanced Orchestration</h3>
                <p className="text-gray-700 leading-relaxed">
                  Kubernetes-native architecture with custom controllers for GPU workload management, 
                  automatic failover, and resource optimization across global infrastructure.
                </p>
              </div>

              <div className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <TrendingUp className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Analytics</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive monitoring and analytics platform providing real-time insights into 
                  performance metrics, cost optimization, and resource utilization patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
