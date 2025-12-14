'use client'

import { useState } from 'react'
import { Menu, X, ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Terms() {
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
              <Link href="/privacy" className="text-gray-700 hover:text-orange-600 transition-colors font-medium">Privacy</Link>
              <Link href="/terms" className="text-orange-600 font-medium">Terms</Link>
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
              <Link href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-gray-50 font-medium">Privacy</Link>
              <Link href="/terms" className="block px-3 py-2 text-orange-600 hover:bg-gray-50 font-medium">Terms</Link>
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
            <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="text-orange-600" size={40} />
            </div>
            <h1 className="text-4xl font-bold text-blue-900 mb-4">Terms and Conditions</h1>
            <p className="text-lg text-gray-600">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to <strong>PT INCOMAS JAYA COLINDO</strong>. These Terms and Conditions govern your use of our logistics and freight transportation services. By accessing or using our services, you agree to be bound by these terms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              If you do not agree to these terms, please do not use our services. These terms apply to all users of our services, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
            </p>
          </section>

          {/* Services Agreement */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <CheckCircle className="text-orange-600 mr-3" size={28} />
              Services Agreement
            </h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Service Description</h3>
                <p className="text-gray-700 mb-4">
                  PT INCOMAS JAYA COLINDO provides domestic and international freight transportation services, including:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Door-to-door delivery services
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Customs clearance and documentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Package tracking and monitoring
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Warehousing and storage solutions
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Service Availability</h3>
                <p className="text-gray-700 mb-4">
                  While we strive to provide uninterrupted service, we cannot guarantee 100% availability. Service availability may be affected by:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Weather conditions and natural disasters
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Customs and regulatory requirements
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Transportation infrastructure limitations
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Political or civil unrest
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* User Responsibilities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <AlertCircle className="text-orange-600 mr-3" size={28} />
              User Responsibilities
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Accurate Information</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Provide complete and accurate shipment details</li>
                  <li>• Declare package contents truthfully</li>
                  <li>• Specify correct weight and dimensions</li>
                  <li>• Update contact information promptly</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Legal Compliance</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Comply with all applicable laws</li>
                  <li>• Obtain necessary permits and licenses</li>
                  <li>• Pay all applicable taxes and duties</li>
                  <li>• Follow customs regulations</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Payment Obligations</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Pay service fees on time</li>
                  <li>• Provide valid payment methods</li>
                  <li>• Settle additional charges promptly</li>
                  <li>• Maintain good credit standing</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Package Preparation</h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Use appropriate packaging materials</li>
                  <li>• Label packages correctly</li>
                  <li>• Secure fragile items properly</li>
                  <li>• Remove prohibited items</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Items */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Prohibited Items</h2>
            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                The following items are strictly prohibited from shipment through our services:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Dangerous Goods</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Explosives and ammunition</li>
                    <li>• Flammable liquids and gases</li>
                    <li>• Toxic and corrosive substances</li>
                    <li>• Radioactive materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-800 mb-2">Restricted Items</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Illegal drugs and narcotics</li>
                    <li>• Counterfeit currency and goods</li>
                    <li>• Stolen property</li>
                    <li>• Hazardous waste</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Liability and Limitation */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
              <Gavel className="text-orange-600 mr-3" size={28} />
              Liability and Limitation
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-4">Limitation of Liability</h3>
                <p className="text-gray-700 mb-4">
                  Our liability is limited as follows:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Maximum liability is limited to the declared value of the shipment or $100, whichever is lower
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    We are not liable for indirect, consequential, or punitive damages
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    We are not responsible for delays caused by factors beyond our control
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 mr-2">•</span>
                    Claims must be filed within 30 days of delivery
                  </li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">Insurance Coverage</h3>
                <p className="text-gray-700 mb-4">
                  Basic insurance coverage is included with all shipments. Additional coverage can be purchased separately:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-blue-900">Basic</h4>
                    <p className="text-2xl font-bold text-orange-600">$100</p>
                    <p className="text-sm text-gray-600">Included</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-blue-900">Standard</h4>
                    <p className="text-2xl font-bold text-orange-600">$500</p>
                    <p className="text-sm text-gray-600">+$5 per shipment</p>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-blue-900">Premium</h4>
                    <p className="text-2xl font-bold text-orange-600">$5,000</p>
                    <p className="text-sm text-gray-600">+$15 per shipment</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Payment Terms */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Payment Terms</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="font-semibold text-blue-900 mb-2">Payment Methods</h3>
                <p className="text-gray-700">We accept cash, bank transfers, credit cards, and electronic payments.</p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="font-semibold text-blue-900 mb-2">Billing Schedule</h3>
                <p className="text-gray-700">Payment is due upon receipt of invoice for one-time services. For regular clients, payment terms are net 15 days.</p>
              </div>
              
              <div className="border-l-4 border-orange-600 pl-6 py-2">
                <h3 className="font-semibold text-blue-900 mb-2">Late Payments</h3>
                <p className="text-gray-700">Late payments are subject to a 2% monthly interest charge. Services may be suspended for accounts with overdue payments.</p>
              </div>
            </div>
          </section>

          {/* Termination */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Termination</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                Either party may terminate this agreement with written notice. PT INCOMAS JAYA COLINDO reserves the right to immediately terminate services for:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Violation of these terms and conditions
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Non-payment of services rendered
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Fraudulent activities or misrepresentation
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">•</span>
                  Shipment of prohibited items
                </li>
              </ul>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-6">Contact Us</h2>
            <div className="bg-blue-900 text-white p-8 rounded-lg">
              <p className="mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="space-y-2">
                <p><strong>Company:</strong> PT INCOMAS JAYA COLINDO</p>
                <p><strong>Email:</strong> legal@incomasjayacolindo.com</p>
                <p><strong>Phone:</strong> 0823-1204-2895</p>
                <p><strong>Address:</strong> Ruko Duta Bumi, Perum Harapan Indah Blok D10 No. 11, Jl. Duta Bumi Raya, Desa/Kelurahan Pejuang, Kec. Medansatria, Kota Bekasi, Provinsi Jawa Barat 17131</p>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Republic of Indonesia. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bekasi, West Java.
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