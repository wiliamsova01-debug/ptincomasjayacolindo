'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Privacy() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="PT INCOMAS JAYA COLINDO" width={40} height={40} className="h-10 w-auto" />
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-blue-900">PT INCOMAS JAYA COLINDO</h1>
                  <p className="text-xs text-gray-600">Logistics & Freight Solutions</p>
                </div>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Home</Link>
              <Link href="/privacy" className="text-orange-600 font-medium">Privacy</Link>
              <Link href="/terms" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Terms</Link>
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
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium">Home</Link>
              <Link href="/privacy" className="block px-3 py-2 text-orange-600 hover:bg-gray-50 font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium">Terms</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-gray-500 hover:text-orange-600 flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="text-blue-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At <strong>PT INCOMAS JAYA COLINDO</strong>, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our logistics and freight transportation services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Database className="text-orange-600 mr-3" size={28} />
              Information We Collect
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Personal Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Full name, company name, and contact details
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Email address and phone number
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Billing and payment information
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Government identification numbers (when required)
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Shipment Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Origin and destination addresses
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Package descriptions and values
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Weight, dimensions, and special handling requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Customs documentation and declarations
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Technical Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    IP address and device information
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Browser type and operating system
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Cookies and tracking technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Usage patterns and service interactions
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Eye className="text-orange-600 mr-3" size={28} />
              How We Use Your Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Service Provision</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Process and manage shipments</li>
                  <li>• Provide tracking and updates</li>
                  <li>• Handle customs clearance</li>
                  <li>• Generate invoices and receipts</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Communication</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Send service notifications</li>
                  <li>• Respond to inquiries</li>
                  <li>• Provide customer support</li>
                  <li>• Share promotional offers</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Legal Compliance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Meet regulatory requirements</li>
                  <li>• Prevent fraudulent activities</li>
                  <li>• Ensure security protocols</li>
                  <li>• Maintain audit trails</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Service Improvement</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Analyze usage patterns</li>
                  <li>• Enhance user experience</li>
                  <li>• Develop new features</li>
                  <li>• Optimize operations</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Lock className="text-orange-600 mr-3" size={28} />
              Data Protection & Security
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-6">
                <strong>PT INCOMAS JAYA COLINDO</strong> implements industry-standard security measures to protect your personal information:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Encryption</h4>
                    <p className="text-gray-600 text-sm">SSL/TLS encryption for data transmission</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Access Control</h4>
                    <p className="text-gray-600 text-sm">Restricted access to authorized personnel</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Regular Audits</h4>
                    <p className="text-gray-600 text-sm">Periodic security assessments</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900">Data Backup</h4>
                    <p className="text-gray-600 text-sm">Secure backup and recovery systems</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <UserCheck className="text-orange-600 mr-3" size={28} />
              Your Privacy Rights
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="font-semibold text-blue-900 mb-2">Access and Correction</h3>
                <p className="text-gray-700">You have the right to access and correct your personal information held by us.</p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="font-semibold text-blue-900 mb-2">Data Deletion</h3>
                <p className="text-gray-700">You may request deletion of your personal data, subject to legal obligations.</p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="font-semibold text-blue-900 mb-2">Opt-Out</h3>
                <p className="text-gray-700">You can opt out of marketing communications at any time.</p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="font-semibold text-blue-900 mb-2">Complaints</h3>
                <p className="text-gray-700">You have the right to lodge complaints about our data handling practices.</p>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h2>
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <p className="mb-4">
                If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Company:</strong> PT INCOMAS JAYA COLINDO</p>
                <p><strong>Email:</strong> privacy@incomasjayacolindo.com</p>
                <p><strong>Phone:</strong> 0823-1204-2895</p>
                <p><strong>Address:</strong> Ruko Duta Bumi, Perum Harapan Indah Blok D10 No. 11, Jl. Duta Bumi Raya, Desa/Kelurahan Pejuang, Kec. Medansatria, Kota Bekasi, Provinsi Jawa Barat 17131</p>
              </div>
            </div>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Policy Updates</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or business operations. We will notify you of any significant changes by posting the updated policy on our website and sending you an email notification.
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p>&copy; 2024 PT INCOMAS JAYA COLINDO. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <Link href="/privacy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}