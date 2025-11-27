import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';
import {
  Settings,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ArrowRight,
  Database,
  TrendingUp,
  Shield,
  Award,
  Zap,
  Target,
  BarChart3,
  Quote
} from 'lucide-react';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form will be submitted directly to FormSubmit - no handler needed
  // FormSubmit will handle the submission and redirect

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/919663510316', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex flex-col">
              <span className="text-2xl font-extrabold text-gray-900 tracking-wide">ILLUR CONSULTING</span>
              <span className="text-xs text-gray-600 tracking-wide font-normal mt-0.5">Lead with Clarity, Grow with Strategy</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-sm">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-sm">
                Services
              </button>
              <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-sm">
                Industries
              </button>
              <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-sm">
                Case Studies
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900 transition-colors font-medium text-sm">
                About
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800 transition-colors text-sm font-medium">
                Contact
              </button>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-900 text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-900 text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-900 text-left">
                  Industries
                </button>
                <button onClick={() => scrollToSection('case-studies')} className="text-gray-700 hover:text-blue-900 text-left">
                  Case Studies
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-900 text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-900 text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20 overflow-hidden">
        <div 
          className="relative h-[375px] bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.92), rgba(15, 23, 42, 0.92)), url(https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e?w=1920&q=80&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-4xl text-white">
              <div className="inline-block px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-4">
                Global Trade Management Specialists
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Enterprise GTM Implementation & Trade Compliance Excellence
              </h1>
              <p className="text-base md:text-lg text-gray-100 mb-6 leading-relaxed max-w-3xl">
                We help global enterprises deploy and optimize E2Open, WiseTech Global, and SAP GTM platforms—streamlining customs compliance, reducing duty spend, and accelerating cross-border operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-white hover:bg-gray-100 text-blue-900 px-6 py-3 text-sm font-semibold rounded shadow-lg flex items-center gap-2"
                >
                  Book a Consultation
                  <ArrowRight size={16} />
                </Button>
                <Button
                  onClick={() => scrollToSection('services')}
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-blue-900 px-6 py-3 text-sm font-semibold rounded shadow-lg"
                >
                  Explore Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-16 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive GTM solutions tailored for enterprise-scale global trade operations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Settings,
                title: 'Global Trade Management System Implementation',
                description: 'End-to-end deployment of E2Open, WiseTech Global, SAP GTS, and Oracle GTM platforms. Configuration, testing, go-live support, and post-deployment optimization.',
                image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095'
              },
              {
                icon: TrendingUp,
                title: 'Process Design & Optimization for Trade Compliance',
                description: 'Streamline customs workflows, duty optimization strategies, restricted party screening, and documentation automation for faster, compliant operations.',
                image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
              },
              {
                icon: Database,
                title: 'System Integrations',
                description: 'Seamless integration with SAP, Oracle ERP, E2Open, WiseTech Global, 3PL systems, and customs portals. API design, data mapping, and real-time connectivity.',
                image: 'https://images.unsplash.com/photo-1573164713712-03790a178651'
              },
              {
                icon: Users,
                title: 'Training & Advisory for GTM Teams',
                description: 'Customized training programs, best practice workshops, and ongoing advisory support to maximize platform ROI and team productivity.',
                image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all border border-gray-200">
                  <div 
                    className="h-32 bg-cover bg-center relative"
                    style={{
                      backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.85)), url(${service.image}?w=800&q=80&auto=format&fit=crop)`
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white bg-opacity-20 backdrop-blur-sm w-14 h-14 rounded-full flex items-center justify-center">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-gray-600">Delivering specialized GTM expertise across global sectors</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Manufacturing', icon: Settings },
              { name: 'Automotive', icon: TrendingUp },
              { name: 'Pharmaceutical', icon: Shield },
              { name: 'Retail', icon: Award },
              { name: 'High-Tech', icon: Zap }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-all border border-gray-200">
                  <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-900" size={28} />
                  </div>
                  <h3 className="text-gray-900 font-semibold">{industry.name}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Illur Consulting</h2>
            <p className="text-lg text-gray-600">Proven expertise delivering measurable results for global enterprises</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: '18+ Years GTM Expertise',
                description: 'Deep domain knowledge in trade compliance and GTM platforms'
              },
              {
                icon: Target,
                title: 'Global-Scale Deployments',
                description: 'Delivered enterprise implementations across continents'
              },
              {
                icon: Zap,
                title: 'Process + Technology',
                description: 'Strong alignment between business process and technical implementation'
              },
              {
                icon: CheckCircle,
                title: 'Fortune 100 Track Record',
                description: 'Trusted by leading global enterprises for critical projects'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-900 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600">Real-world impact from our GTM implementations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Case Study 1 - E2Open Donaldson */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
              <div 
                className="h-40 bg-cover bg-center relative"
                style={{
                  backgroundImage: 'linear-gradient(rgba(30, 58, 138, 0.8), rgba(30, 58, 138, 0.8)), url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop)'
                }}
              >
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-3 py-1 rounded-full text-blue-900 text-xs font-semibold">
                    E2OPEN
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Donaldson Company - Global Trade Platform</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Led end-to-end E2Open GTM implementation for a Fortune 500 manufacturing leader, streamlining customs compliance across 40+ countries.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">Reduced compliance processing time by 60%</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">Automated 90% of documentation workflows</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">Go-live on schedule with zero downtime</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-blue-900 text-blue-900 hover:bg-blue-50">
                  View Full Case Study
                </Button>
              </div>
            </Card>

            {/* Case Study 2 - Template */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
              <div 
                className="h-40 bg-cover bg-center relative"
                style={{
                  backgroundImage: 'linear-gradient(rgba(100, 116, 139, 0.8), rgba(100, 116, 139, 0.8)), url(https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&q=80&auto=format&fit=crop)'
                }}
              >
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-3 py-1 rounded-full text-gray-700 text-xs font-semibold">
                    [PLATFORM NAME]
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">[Client Name] - [Project Title]</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  [Brief description of the project, challenge addressed, and scope of work. 2-3 sentences about what was delivered.]
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">[Key measurable outcome #1]</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">[Key measurable outcome #2]</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">[Key measurable outcome #3]</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-gray-400 text-gray-700 hover:bg-gray-100">
                  View Full Case Study
                </Button>
              </div>
            </Card>

            {/* Case Study 3 - Template */}
            <Card className="overflow-hidden border border-gray-200 hover:shadow-xl transition-all group">
              <div 
                className="h-40 bg-cover bg-center relative"
                style={{
                  backgroundImage: 'linear-gradient(rgba(100, 116, 139, 0.8), rgba(100, 116, 139, 0.8)), url(https://images.unsplash.com/photo-1593617761943-9099951a0769?w=600&q=80&auto=format&fit=crop)'
                }}
              >
                <div className="absolute top-4 left-4">
                  <div className="bg-white px-3 py-1 rounded-full text-gray-700 text-xs font-semibold">
                    [PLATFORM NAME]
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">[Client Name] - [Project Title]</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  [Brief description of the project, challenge addressed, and scope of work. 2-3 sentences about what was delivered.]
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">[Key measurable outcome #1]</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">[Key measurable outcome #2]</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="text-green-600" size={16} />
                    <span className="text-gray-700">[Key measurable outcome #3]</span>
                  </div>
                </div>
                <Button variant="outline" className="w-full border-gray-400 text-gray-700 hover:bg-gray-100">
                  View Full Case Study
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-lg text-gray-600">What our clients say about working with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial Template 1 */}
            <Card className="p-8 border border-gray-200 relative">
              <Quote className="text-blue-900 opacity-20 absolute top-6 right-6" size={40} />
              <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                "[Insert client testimonial text here. Share specific feedback about the project, expertise, and results delivered. Keep it authentic and specific.]"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">[Client Name]</p>
                <p className="text-sm text-gray-600">[Title], [Company Name]</p>
              </div>
            </Card>

            {/* Testimonial Template 2 */}
            <Card className="p-8 border border-gray-200 relative">
              <Quote className="text-blue-900 opacity-20 absolute top-6 right-6" size={40} />
              <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                "[Insert client testimonial text here. Share specific feedback about the project, expertise, and results delivered. Keep it authentic and specific.]"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">[Client Name]</p>
                <p className="text-sm text-gray-600">[Title], [Company Name]</p>
              </div>
            </Card>

            {/* Testimonial Template 3 */}
            <Card className="p-8 border border-gray-200 relative">
              <Quote className="text-blue-900 opacity-20 absolute top-6 right-6" size={40} />
              <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10">
                "[Insert client testimonial text here. Share specific feedback about the project, expertise, and results delivered. Keep it authentic and specific.]"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">[Client Name]</p>
                <p className="text-sm text-gray-600">[Title], [Company Name]</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Tabs */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Illur Consulting</h2>
            <p className="text-lg text-gray-600">Boutique expertise with enterprise-scale impact</p>
          </div>

          <Tabs defaultValue="company" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="company" className="text-base">About the Company</TabsTrigger>
              <TabsTrigger value="leadership" className="text-base">Leadership</TabsTrigger>
            </TabsList>

            <TabsContent value="company" className="space-y-6">
              <Card className="p-8 border border-gray-200">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Illur Consulting LLP is a boutique consulting firm specializing in Global Trade Management (GTM) system implementations and trade compliance optimization. We partner with Fortune 100 enterprises to deploy and maximize platforms like E2Open, WiseTech Global, SAP GTS, and Oracle GTM.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our approach combines deep technical expertise with real-world trade operations experience, ensuring implementations that are not just technically sound, but operationally transformative.
                </p>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-blue-900">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed">
                    To be the trusted partner for global enterprises seeking seamless, compliant, and digitally-powered international trade operations.
                  </p>
                </Card>

                <Card className="p-6 border-l-4 border-blue-900">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Deliver GTM implementations with clarity, precision, and measurable business impact—helping enterprises grow through strategic trade automation.
                  </p>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leadership">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Prasanna Kumar Illur */}
                <Card className="p-8 text-center border border-gray-200">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-900 to-blue-700 flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white text-4xl font-bold">PI</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Prasanna Kumar Illur</h3>
                  <p className="text-blue-900 font-semibold mb-4">Founder & Principal Consultant</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Prasanna brings 18+ years of expertise in Global Trade Management, specializing in E2Open, WiseTech Global, and SAP GTM implementations. As a Senior Manager with both technical development and GTM consulting experience, he has led enterprise-scale deployments for Fortune 100 clients across automotive, manufacturing, and high-tech sectors.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    His unique blend of Java development background and deep trade compliance knowledge enables him to bridge the gap between technology and business operations—delivering solutions that are both technically robust and operationally transformative.
                  </p>
                </Card>

                {/* Manasa Prasanna Illur */}
                <Card className="p-8 text-center border border-gray-200">
                  <div className="relative inline-block mb-6">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-white text-4xl font-bold">MI</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Manasa Prasanna Illur</h3>
                  <p className="text-blue-900 font-semibold mb-4">Director - Finance & Legal</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Manasa oversees financial operations, accounts management, and legal compliance for Illur Consulting. Her meticulous approach ensures the company maintains the highest standards of business integrity and regulatory adherence.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    She plays a critical role in client relationship management and ensures seamless operations, allowing the consulting team to focus on delivering exceptional GTM implementations.
                  </p>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Talk About Your GTM Challenges</h2>
            <p className="text-lg text-gray-600">Schedule a consultation to discuss how we can help</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-900 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-900 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9663510316</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-900 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@illurconsulting.com</p>
                  </div>
                </div>
              </div>

              {/* Quick Connect Buttons */}
              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white w-full py-6 text-base flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Message on WhatsApp
                </Button>
                <Button
                  onClick={() => scrollToSection('contact')}
                  variant="outline"
                  className="border-2 border-blue-900 text-blue-900 hover:bg-blue-50 w-full py-6 text-base"
                >
                  Schedule a Call
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-6 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
                <form action="https://formsubmit.co/info@illurconsulting.com" method="POST" className="space-y-4">
                  {/* FormSubmit Configuration */}
                  <input type="hidden" name="_subject" value="New inquiry from Illur Consulting website" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{display: 'none'}} />
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <Input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <Input
                      type="email"
                      name="email"
                      required
                      placeholder="john.doe@company.com"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <Input
                      type="text"
                      name="company"
                      placeholder="Your Company Name"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="+1 (555) 000-0000"
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <Textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell us about your GTM challenges and requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white py-6 text-base">
                    Send Message
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Your message will be sent directly to our team at info@illurconsulting.com
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-2">ILLUR CONSULTING</h3>
              <p className="text-gray-400 text-sm mb-4">Lead with Clarity, Grow with Strategy</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Boutique GTM consulting firm specializing in E2Open, WiseTech Global, SAP GTS, and Oracle implementations for global enterprises.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </button>
                <button onClick={() => scrollToSection('industries')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Industries
                </button>
                <button onClick={() => scrollToSection('case-studies')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  Case Studies
                </button>
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors text-sm">
                  About
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Bangalore, India</p>
                <p>+91 9663510316</p>
                <p>info@illurconsulting.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 Illur Consulting LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
