import React, { useState, useEffect } from 'react';
import { Cpu, Zap, DollarSign, Clock, BarChart3, Code, ArrowRight, CheckCircle, Activity, TrendingUp, Gauge, Network } from 'lucide-react';

const UsersPage = () => {
  const [selectedGpu, setSelectedGpu] = useState('rtx4090');
  const [realTimeData, setRealTimeData] = useState({
    networkTps: 100,
    activeInferences: 5,
    totalProviders: 10
  });

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRealTimeData(prev => ({
        networkTps: prev.networkTps + Math.floor(Math.random() * 100) - 50,
        activeInferences: prev.activeInferences + Math.floor(Math.random() * 20) - 10,
        totalProviders: prev.totalProviders + Math.floor(Math.random() * 4) - 2
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const gpuOptions = [
    {
      id: 'rtx4090',
      name: 'NVIDIA RTX 4090',
      vram: '24GB',
      price: '$0.50/hour',
      performance: '92%',
      availability: '2,847 available',
      tpsRange: '45-65 TPS',
      avgTps: 58,
      modelSupport: ['Llama 2 7B', 'Mistral 7B', 'CodeLlama 7B'],
      maxContextLength: '32K tokens',
      batchSize: '8-16',
      latency: '120ms',
      useCases: ['LLM Fine-tuning', 'Image Generation', 'Research']
    },
    {
      id: 'a100',
      name: 'NVIDIA A100',
      vram: '40GB',
      price: '$1.20/hour', 
      performance: '98%',
      availability: '1,234 available',
      tpsRange: '85-120 TPS',
      avgTps: 105,
      modelSupport: ['Llama 2 13B', 'GPT-3.5 equivalent', 'Claude 2'],
      maxContextLength: '64K tokens',
      batchSize: '16-32',
      latency: '85ms',
      useCases: ['Large Model Training', 'Enterprise AI', 'Multi-GPU setups']
    },
    {
      id: 'h100',
      name: 'NVIDIA H100',
      vram: '80GB',
      price: '$2.80/hour',
      performance: '100%',
      availability: '567 available',
      tpsRange: '180-250 TPS',
      avgTps: 220,
      modelSupport: ['Llama 2 70B', 'GPT-4 equivalent', 'Custom 70B+'],
      maxContextLength: '128K tokens',
      batchSize: '32-64',
      latency: '45ms',
      useCases: ['Transformer Training', 'Inference at Scale', 'Research']
    }
  ];

  const networkMetrics = [
    {
      label: 'Network TPS',
      value: realTimeData.networkTps.toLocaleString(),
      change: '+0%',
      icon: <Gauge className="h-5 w-5" />,
      color: 'text-green-400'
    },
    {
      label: 'Active Inferences',
      value: realTimeData.activeInferences.toLocaleString(),
      change: '+0%',
      icon: <Activity className="h-5 w-5" />,
      color: 'text-blue-400'
    },
    {
      label: 'GPU Providers',
      value: realTimeData.totalProviders.toLocaleString(),
      change: '+0%',
      icon: <Network className="h-5 w-5" />,
      color: 'text-purple-400'
    },
    {
      label: 'Avg Response Time',
      value: '89ms',
      change: '-5.3%',
      icon: <Clock className="h-5 w-5" />,
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: 'Rs150 ',
      period: '/Input and Output Tokens',
      Token : '0.5 Million',
      features: [' Basic GPU Pacakage', 'Basic monitoring', 'Email support', 'API access'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'Contact Sales Team',
      period: '/Input and Output Tokens',
      Token : '0.5 Million',
      features: ['All GPU types', 'Advanced analytics', 'Priority support', 'Multi-region', 'Custom models'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Contact Sales Team',
      period: '/Input and Output Tokens',
      Token : '0.5 Million',
      features: ['Dedicated clusters', 'SLA guarantees', 'On-premise hybrid', 'Custom integration', '24/7 support'],
      popular: false
    }
  ];

  const inferenceMetrics = [
    {
      model: 'Llama 2 7B',
      avgTps: '58 TPS',
      providers: '2,847',
      bestGpu: 'RTX 4090',
      latency: '120ms'
    },
    {
      model: 'Llama 2 13B',
      avgTps: '105 TPS',
      providers: '1,234',
      bestGpu: 'A100',
      latency: '85ms'
    },
    {
      model: 'Llama 2 70B',
      avgTps: '220 TPS',
      providers: '567',
      bestGpu: 'H100',
      latency: '45ms'
    },
    {
      model: 'Mistral 7B',
      avgTps: '62 TPS',
      providers: '2,156',
      bestGpu: 'RTX 4090',
      latency: '115ms'
    }
  ];

  const useCases = [
    {
      title: 'Large Language Models',
      description: 'Fine-tune and deploy LLMs like GPT, BERT, and custom transformer models',
      icon: '🤖',
      metrics: '70% cost reduction vs cloud providers',
      tpsRange: '45-250 TPS depending on model size'
    },
    {
      title: 'Real-time Chat Applications',
      description: 'Deploy conversational AI with low latency for customer support and chatbots',
      icon: '💬',
      metrics: '<100ms response time guaranteed',
      tpsRange: '100-500 TPS for concurrent users'
    },
    {
      title: 'Code Generation',
      description: 'Power coding assistants and automated code generation tools',
      icon: '⚡',
      metrics: '3x faster than traditional cloud',
      tpsRange: '80-180 TPS for code completion'
    },
    {
      title: 'Content Generation',
      description: 'Scale content creation for marketing, writing, and creative applications',
      icon: '✍️',
      metrics: 'Handle 10K+ requests per minute',
      tpsRange: '60-200 TPS for text generation'
    }
  ];

  const integrationSteps = [
    { step: 1, title: 'Get API Key', description: 'Sign up and receive your authentication credentials' },
    { step: 2, title: 'Select GPUs', description: 'Choose your preferred GPU types and regions' },
    { step: 3, title: 'Deploy Code', description: 'Upload your training scripts or model files' },
    { step: 4, title: 'Monitor & Scale', description: 'Track progress and scale resources as needed' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Supercharge
              </span>
              <br />
              <span className="text-gray-900">Your LLM Inference</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Access thousands of high-performance GPUs for LLM inference with real-time TPS monitoring, 
              transparent pricing, and guaranteed performance metrics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold text-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-400/30 hover:scale-105 flex items-center justify-center group">
                Start Computing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-600/10 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                View Live Metrics
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Network Metrics */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Live Network <span className="text-blue-600">Performance</span>
            </h2>
            <p className="text-xl text-gray-700">
              Real-time metrics from our global GPU network
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {networkMetrics.map((metric, index) => (
              <div key={index} className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`${metric.color}`}>
                    {metric.icon}
                  </div>
                  <div className={`text-sm font-semibold ${metric.change.startsWith('+') ? 'text-blue-600' : 'text-red-600'}`}>
                    {metric.change}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600">{metric.label}</div>
                <div className="mt-3 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Options with Detailed TPS Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              GPU Performance <span className="text-blue-600">Comparison</span>
            </h2>
            <p className="text-xl text-gray-700">
              Detailed inference metrics for each GPU type in our network
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {gpuOptions.map((gpu) => (
              <div 
                key={gpu.id}
                className={`bg-white/70 border rounded-lg p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedGpu === gpu.id 
                    ? 'border-blue-600 shadow-2xl shadow-blue-400/20' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
                onClick={() => setSelectedGpu(gpu.id)}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">{gpu.name}</h3>
                  <Cpu className="h-6 w-6 text-blue-600" />
                </div>
                
                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-blue-600 text-2xl font-bold">{gpu.avgTps}</div>
                    <div className="text-xs text-gray-600">Avg TPS</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <div className="text-purple-600 text-sm font-bold">{gpu.latency}</div>
                    <div className="text-xs text-gray-600">Latency</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">VRAM:</span>
                    <span className="text-gray-900 font-semibold">{gpu.vram}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">TPS Range:</span>
                    <span className="text-blue-600 font-semibold">{gpu.tpsRange}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Max Context:</span>
                    <span className="text-purple-600 font-semibold">{gpu.maxContextLength}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Batch Size:</span>
                    <span className="text-blue-400 font-semibold">{gpu.batchSize}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Available:</span>
                    <span className="text-gray-900 font-semibold">{gpu.availability}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Supported Models:</h4>
                  <div className="flex flex-wrap gap-1">
                    {gpu.modelSupport.map((model, index) => (
                      <span key={index} className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        {model}
                      </span>
                    ))}
                  </div>
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedGpu === gpu.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'border-2 border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}>
                  {selectedGpu === gpu.id ? 'Selected' : 'View Details'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Model Performance Table */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Model Performance <span className="text-purple-600">Benchmarks</span>
            </h2>
            <p className="text-xl text-gray-700">
              Real-world inference performance across popular LLM models
            </p>
          </div>

          <div className="bg-white/70 border border-gray-200 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-200/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Model</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Avg TPS</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Providers</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Best GPU</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Cost/1K Tokens</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Latency</th>
                  </tr>
                </thead>
                <tbody>
                  {inferenceMetrics.map((metric, index) => (
                    <tr key={index} className="border-t border-gray-200 hover:bg-gray-200/30 transition-colors">
                      <td className="px-6 py-4 text-gray-900 font-medium">{metric.model}</td>
                      <td className="px-6 py-4 text-blue-600 font-semibold">{metric.avgTps}</td>
                      <td className="px-6 py-4 text-purple-600">{metric.providers}</td>
                      <td className="px-6 py-4 text-blue-400">{metric.bestGpu}</td>
                      <td className="px-6 py-4 text-orange-600 font-semibold">{metric.cost}</td>
                      <td className="px-6 py-4 text-gray-700">{metric.latency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Flexible <span className="text-purple-600">Pricing</span>
            </h2>
            <p className="text-xl text-gray-700">
              Choose a plan that scales with your inference needs and TPS requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white/70 border rounded-lg p-6 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-600 shadow-2xl shadow-blue-400/20' 
                    : 'border-gray-200 hover:border-gray-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                  <div className="text-purple-600 font-semibold mt-2">{plan.credits}</div>
                  <div className="text-blue-400 font-semibold text-sm">{plan.tpsAllocation}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'border-2 border-gray-400 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases with TPS Info */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Optimized for <span className="text-blue-600">Every Use Case</span>
            </h2>
            <p className="text-xl text-gray-700">
              From research to production, our platform supports all your LLM inference workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/70 border border-gray-200 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{useCase.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {useCase.description}
                    </p>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="bg-blue-600/10 border border-blue-600/30 rounded-lg p-3">
                        <div className="text-blue-600 font-semibold text-sm">
                          {useCase.metrics}
                        </div>
                      </div>
                      <div className="bg-purple-600/10 border border-purple-600/30 rounded-lg p-3">
                        <div className="text-purple-600 font-semibold text-sm">
                          TPS Range: {useCase.tpsRange}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Guide */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Get Started in <span className="text-purple-600">Minutes</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Our intuitive API and comprehensive documentation make it easy to integrate 
              GPU compute into your existing LLM workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {integrationSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
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
              Ready to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Scale</span> Your LLM Inference?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of developers using Zetta GPU for high-performance LLM inference with transparent TPS metrics and competitive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-transparent border-2 border-gray-400 text-gray-700 rounded-lg font-semibold text-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                View Live Dashboard
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsersPage;
