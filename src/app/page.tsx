'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, MapPin, Globe, Package, Truck, Shield, Clock, ChevronRight, Star, Users, TrendingUp, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-75 {
          animation-delay: 75ms;
        }
        
        .delay-150 {
          animation-delay: 150ms;
        }
      `}</style>
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/logo.png" alt="PT INCOMAS JAYA COLINDO" width={40} height={40} className="h-10 w-auto" />
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-blue-900">PT INCOMAS JAYA COLINDO</h1>
                  <p className="text-xs text-gray-600">Logistics & Freight Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className={`${activeSection === 'home' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`${activeSection === 'about' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`${activeSection === 'services' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`${activeSection === 'contact' ? 'text-orange-600' : 'text-gray-700'} hover:text-orange-600 transition-colors font-medium`}
              >
                Contact
              </button>
              <a href="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Terms</a>
            </div>
            
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-orange-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => { scrollToSection('home'); setIsMenuOpen(false) }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => { scrollToSection('about'); setIsMenuOpen(false) }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium"
              >
                About
              </button>
              <button 
                onClick={() => { scrollToSection('services'); setIsMenuOpen(false) }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => { scrollToSection('contact'); setIsMenuOpen(false) }}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium"
              >
                Contact
              </button>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400 rounded-full opacity-10 animate-pulse delay-75"></div>
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-10 animate-pulse delay-150"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center transform transition-all duration-1000 ease-out">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Your Trusted <span className="text-orange-500">Logistics Partner</span>
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 animate-fade-in-up delay-200">
              Professional freight transportation services for domestic and international shipping
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Get Quote <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Track Shipment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center transform transition-all duration-500 hover:scale-105">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-blue-200">
                <Package className="text-blue-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">10,000+</h3>
              <p className="text-gray-600">Shipments Delivered</p>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-105 delay-100">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-orange-200">
                <Globe className="text-orange-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">50+</h3>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-105 delay-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-green-200">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">500+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="text-center transform transition-all duration-500 hover:scale-105 delay-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:bg-purple-200">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-blue-900 mb-2">99.9%</h3>
              <p className="text-gray-600">On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                About <span className="text-orange-600">PT INCOMAS JAYA COLINDO</span>
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We are a leading logistics and freight transportation company specializing in domestic and international cargo shipping. With years of experience in the industry, we provide reliable, efficient, and cost-effective transportation solutions.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Our commitment to excellence and customer satisfaction has made us a trusted partner for businesses of all sizes. We handle your cargo with the utmost care and ensure timely delivery to any destination.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Shield className="text-orange-600 mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-blue-900">Insured</h4>
                    <p className="text-sm text-gray-600">Fully covered cargo</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="text-orange-600 mr-3" size={24} />
                  <div>
                    <h4 className="font-semibold text-blue-900">24/7 Support</h4>
                    <p className="text-sm text-gray-600">Always available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <span className="font-semibold text-blue-900">Experience</span>
                  <span className="text-2xl font-bold text-orange-600">15+ Years</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                  <span className="font-semibold text-blue-900">Fleet Size</span>
                  <span className="text-2xl font-bold text-orange-600">200+ Vehicles</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <span className="font-semibold text-blue-900">Delivery Success</span>
                  <span className="text-2xl font-bold text-orange-600">99.9%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <span className="font-semibold text-blue-900">Global Network</span>
                  <span className="text-2xl font-bold text-orange-600">50+ Countries</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive logistics solutions for your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-blue-700 group-hover:scale-110">
                <Truck className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Domestic Freight</h3>
              <p className="text-gray-700 mb-6">
                Reliable transportation services across Indonesia with real-time tracking and guaranteed delivery times.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Island-to-island delivery</li>
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Express shipping options</li>
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Full truckload services</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-orange-700 group-hover:scale-110">
                <Globe className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">International Shipping</h3>
              <p className="text-gray-700 mb-6">
                Global freight forwarding services with customs clearance and documentation handling.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Air freight services</li>
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Ocean freight solutions</li>
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Customs brokerage</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-green-700 group-hover:scale-110">
                <Package className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Warehousing & Storage</h3>
              <p className="text-gray-700 mb-6">
                Secure storage facilities with inventory management and distribution services.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Climate-controlled storage</li>
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Inventory tracking</li>
                <li className="flex items-center"><ChevronRight className="text-orange-600 mr-2" size={16} /> Order fulfillment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700 text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-5 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full opacity-5 animate-pulse delay-75"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">Ready to Ship with Confidence?</h2>
          <p className="text-xl mb-8 text-orange-100 animate-fade-in-up delay-200">
            Join hundreds of businesses that trust PT INCOMAS JAYA COLINDO for their logistics needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <button className="bg-white text-orange-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
              Get Free Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-600 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our logistics experts</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Send us a Message</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                    <input type="tel" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message</label>
                    <textarea rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-orange-600 mr-4 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-blue-900">Address</h4>
                      <p className="text-gray-600">
                        Ruko Duta Bumi, Perum Harapan Indah Blok D10 No. 11<br />
                        Jl. Duta Bumi Raya, Desa/Kelurahan Pejuang<br />
                        Kec. Medansatria, Kota Bekasi<br />
                        Provinsi Jawa Barat 17131
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="text-orange-600 mr-4" size={20} />
                    <div>
                      <h4 className="font-semibold text-blue-900">Phone</h4>
                      <p className="text-gray-600">0823-1204-2895</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="text-orange-600 mr-4" size={20} />
                    <div>
                      <h4 className="font-semibold text-blue-900">Email</h4>
                      <p className="text-gray-600">info@incomasjayacolindo.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-blue-900 to-blue-700 p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">08:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image src="/logo.png" alt="PT INCOMAS JAYA COLINDO" width={32} height={32} className="h-8 w-auto" />
                <h3 className="ml-2 text-lg font-bold">PT INCOMAS JAYA COLINDO</h3>
              </div>
              <p className="text-blue-200">
                Your trusted partner for domestic and international freight transportation services.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-blue-200">
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center hover:bg-orange-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024 PT INCOMAS JAYA COLINDO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}