import React, { useState } from 'react';
import { Check, Cpu, DollarSign, Shield, Zap, TrendingUp, Users, Globe, ArrowRight, AlertCircle } from 'lucide-react';

const ProvidersPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const requirements = [
    { category: "Minimum Hardware", items: ["CPU 4 core", "8GB", "Internet speed 100 Mbps", "Redundant power supply"] },
    { category: "Recommended Setup", items: ["NVIDIA RTX 3080/4090/A100/H100", "32GB+ VRAM", "Enterprise internet", "Redundant power supply"] },
    { category: "Technical Requirements", items: ["Linux/Windows Server", "GPU monitoring tools", "Network security protocols"] }
  ];

  const pricingTiers = [
    {
      name: "Basic",
      id: "basic",
      monthlyEarning: "Rs 600-800",
      gpuTypes: "CPU 4 core, 8GB",
      features: ["Standard compute rates", "Basic monitoring", "Email support", "Monthly payouts"],
      
    },
    {
      name: "Professional", 
      id: "professional",
      monthlyEarning: "Contact Sales Team",
      gpuTypes: "RTX 4090/A100",
      features: ["Premium rates", "Advanced analytics", "Priority support", "Weekly payouts", "Performance bonuses"],
      popular: true
    },
    {
      name: "Enterprise",
      id: "enterprise", 
      monthlyEarning: "Contact Sales Team",
      gpuTypes: "H100/A100 clusters",
      features: ["Highest rates", "Custom analytics", "Dedicated support", "Daily payouts", "Revenue sharing", "SLA guarantees"],
      
    }
  ];

  const securityFeatures = [
    { icon: <Shield className="h-6 w-6" />, title: "Hardware Protection", description: "Containerized workloads prevent unauthorized access to your system" },
    { icon: <Globe className="h-6 w-6" />, title: "Encrypted Communication", description: "All data transfers use end-to-end encryption protocols" },
    { icon: <Users className="h-6 w-6" />, title: "Verified Users", description: "Comprehensive vetting process for all compute users" },
    { icon: <AlertCircle className="h-6 w-6" />, title: "Monitoring & Alerts", description: "Real-time monitoring with instant alerts for anomalies" }
  ];

  const faqItems = [
    {
      question: "How much can I earn sharing my GPU?",
      answer: "Earnings depend on your GPU model, uptime, and demand."
    },
    {
      question: "Is my hardware safe?",
      answer: "Yes. All workloads run in isolated containers with no access to your system. We provide comprehensive insurance coverage for registered providers."
    },
    {
      question: "What are the technical requirements?",
      answer: "You need a modern NVIDIA GPU (RTX 3080+), stable internet, and the ability to run our lightweight management software. Full setup takes under 30 minutes."
    },
    {
      question: "How do payments work?",
      answer: "Payments are processed automatically based on your tier (weekly/monthly). We support bank transfers, crypto payments, and digital wallets."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gray-900">Turn Your</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                GPU Into Income
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Join thousands of GPU owners earning passive income by sharing their compute power with 
              AI researchers and developers worldwide.
            </p>
            <div className="flex justify-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-105 flex items-center group">
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Hardware <span className="text-blue-600">Requirements</span>
            </h2>
            <p className="text-xl text-gray-700">
              Ensure your setup meets our standards for optimal performance and earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{req.category}</h3>
                <ul className="space-y-3">
                  {req.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Earning <span className="text-purple-600">Potential</span>
            </h2>
            <p className="text-xl text-gray-700">
              Choose the tier that matches your hardware and maximize your earnings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative bg-white/70 border rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer ${
                  tier.popular 
                    ? 'border-blue-600 shadow-2xl shadow-blue-400/20' 
                    : selectedPlan === tier.id 
                      ? 'border-purple-600' 
                      : 'border-gray-200 hover:border-gray-400'
                }`}
                onClick={() => setSelectedPlan(tier.id)}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">{tier.monthlyEarning}</div>
                  <div className="text-sm text-gray-600">per month</div>
                  <div className="text-sm text-purple-600 mt-2">{tier.gpuTypes}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                    : 'border-2 border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Your Hardware is <span className="text-blue-600">Protected</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Enterprise-grade security measures ensure your GPU and system remain safe while earning income.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group-hover:transform group-hover:scale-105">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                Frequently Asked <span className="text-purple-600">Questions</span>
              </h2>
            </div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition-colors">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 via-white to-gray-100">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Start Earning</span>?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join our network of GPU providers and start generating passive income from your hardware today.
            </p>
            <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-105">
              Register Your GPU Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProvidersPage;
