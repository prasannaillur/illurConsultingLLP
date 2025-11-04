import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Ship,
  Globe,
  FileText,
  Shield,
  TrendingUp,
  Settings,
  Users,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: Settings,
      text: 'GTM Configuration & Implementation',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095'
    },
    {
      icon: Shield,
      text: 'Trade Compliance & Document Digitization',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
    },
    {
      icon: TrendingUp,
      text: 'Process Re-Engineering & Automation',
      image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740'
    },
    {
      icon: FileText,
      text: 'Customs Duty Optimization',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
    },
    {
      icon: Globe,
      text: 'Integration with ERP, Logistics & Customs Systems',
      image: 'https://images.unsplash.com/photo-1573164713712-03790a178651'
    },
    {
      icon: Users,
      text: 'Managed Support & Training',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

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

  // Auto-advance carousel
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentServiceIndex((prev) => (prev + 1) % services.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  const nextService = () => {
    setCurrentServiceIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentServiceIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center flex-shrink-0">
              <img
                src="https://customer-assets.emergentagent.com/job_consult-hub-497/artifacts/kp3anrbd_IMG-20250714-WA0009%281%29.jpg"
                alt="Illur Consulting LLP"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Services
              </button>
              <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Industries
              </button>
              <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Why Us
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
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
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-600 text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-600 text-left">
                  About
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-600 text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection('industries')} className="text-gray-700 hover:text-blue-600 text-left">
                  Industries
                </button>
                <button onClick={() => scrollToSection('why-us')} className="text-gray-700 hover:text-blue-600 text-left">
                  Why Us
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative pt-20">
        <div
          className="relative h-[600px] bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(15, 45, 85, 0.85), rgba(15, 45, 85, 0.85)), url(https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="text-white max-w-3xl">
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Global Trade Management, Compliance & Digital Transformation Experts
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Helping global enterprises streamline cross-border supply chain operations with smarter, faster & compliant processes.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={() => scrollToSection('contact')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
                >
                  Book a Consultation
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-6 text-lg"
                >
                  Download Company Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Core Highlights - Auto Scrolling */}
        <div className="bg-gray-50 py-12 overflow-hidden">
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}} />
          <div className="flex animate-scroll">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 px-3">
                {[
                  { icon: Settings, text: 'GTM Configuration & Implementation' },
                  { icon: Shield, text: 'Trade Compliance & Document Digitization' },
                  { icon: TrendingUp, text: 'Process Re-Engineering & Automation' },
                  { icon: FileText, text: 'Customs Duty Optimization' },
                  { icon: Globe, text: 'Integration with ERP, Logistics & Customs Systems' },
                  { icon: Users, text: 'Managed Support & Training' }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm whitespace-nowrap min-w-fit">
                      <CheckCircle className="text-blue-600 flex-shrink-0" size={24} />
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Illur Consulting LLP</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Illur Consulting LLP is a trade technology consulting firm helping businesses simplify global supply chain and customs operations.
              We bring years of industry experience in manufacturing, retail, automotive, pharma, and global logistics, helping companies go paperless, fully compliant, and more profitable.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  To make international trade simpler, compliant, and digitally powered for every business.
                </p>
              </Card>

              <Card className="p-6 border-l-4 border-blue-600">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  Helping enterprises adopt global trade automation with transparency, speed, and measurable cost savings.
                </p>
              </Card>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Core Strengths</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  '15+ years combined GTM & ERP expertise',
                  'Strong experience with global trade software ecosystems',
                  'Hands-on implementation, not just advisory',
                  'Proven track record with global clients',
                  'Highly responsive support model'
                ].map((strength, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Settings,
                title: 'GTM Software Configuration',
                items: [
                  'Oracle GTM / SAP GTS / Amber Road / Integration platforms',
                  'Product classification, documentation, screening, license management',
                  'Trade document automation & compliance workflows',
                  'End-to-end implementation support'
                ]
              },
              {
                icon: Shield,
                title: 'Trade Compliance & Risk Management',
                items: [
                  'Restricted party screening',
                  'Export control & customs documentation',
                  'License & permit management',
                  'Duty drawback and regulatory checks'
                ]
              },
              {
                icon: TrendingUp,
                title: 'Process Consulting & Optimization',
                items: [
                  'Supply chain digitization',
                  'Freight, customs & broker coordination',
                  'Trade process re-engineering',
                  'Data quality improvement and standardization'
                ]
              },
              {
                icon: Globe,
                title: 'Integrations & Automation',
                items: [
                  'ERP, WMS, 3PL, Carrier, Customs system integrations',
                  'API-based data exchange',
                  'Auto-document creation & validation',
                  'Robotic process automation (RPA)'
                ]
              },
              {
                icon: Users,
                title: 'Managed Support Services',
                items: [
                  'Ongoing business support',
                  'Feature enhancements',
                  'Compliance updates',
                  'SLA-driven service model'
                ]
              },
              {
                icon: FileText,
                title: 'Digital Transformation',
                items: [
                  'Paperless documentation',
                  'Cloud-based solutions',
                  'Real-time tracking & visibility',
                  'Advanced analytics & reporting'
                ]
              }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="bg-blue-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="text-gray-600 text-sm flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Support</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Manufacturing', icon: Settings },
              { name: 'Retail & E-commerce', icon: Ship },
              { name: 'Automotive', icon: TrendingUp },
              { name: 'Pharma & Chemicals', icon: Shield },
              { name: 'Electronics', icon: Globe },
              { name: 'Logistics & Freight', icon: Ship }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-blue-600" size={32} />
                  </div>
                  <h3 className="text-gray-900 font-semibold">{industry.name}</h3>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Us</h2>
            <div className="w-20 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Deep GTM domain expertise',
              'Faster implementation with proven frameworks',
              'Cost-effective consulting model',
              '100% transparent communication',
              'Onshore + Offshore hybrid delivery',
              'Better ROI & faster deployment'
            ].map((reason, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
                <CheckCircle className="text-white flex-shrink-0" size={24} />
                <span className="text-white font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Location</h4>
                    <p className="text-gray-600">Bangalore, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 9663510316</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@illurconsulting.com</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Button */}
              <div className="mt-8">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-green-500 hover:bg-green-600 text-white w-full py-6 text-lg flex items-center justify-center space-x-2"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Message us on WhatsApp</span>
                </Button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name*</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Illur Consulting LLP</h3>
              <p className="text-gray-400">
                Global Trade Management, Compliance & Digital Transformation Experts
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-white transition-colors">
                  Services
                </button>
                <button onClick={() => scrollToSection('industries')} className="block text-gray-400 hover:text-white transition-colors">
                  Industries
                </button>
                <button onClick={() => scrollToSection('contact')} className="block text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2 text-gray-400">
                <p>Bangalore, India</p>
                <p>Phone: +91 9663510316</p>
                <p>Email: info@illurconsulting.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Illur Consulting LLP. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
