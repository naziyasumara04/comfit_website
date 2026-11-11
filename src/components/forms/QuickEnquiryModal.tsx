'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { Product } from '@/types';
import { submitBulkInquiry } from '@/services/inquiry.service';

interface QuickEnquiryModalProps {
  product: Product;
  onClose: () => void;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    estimatedQuantity: '250g Pouches (Retail)',
    deliveryRegion: '',
    message: `Inquiring for commercial pricing for ${product.name}.`,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await submitBulkInquiry({
        fullName: formData.fullName,
        companyName: formData.companyName,
        email: formData.email,
        phone: formData.phone,
        businessType: 'Bakery / Retailer',
        productInterest: product.name,
        estimatedQuantity: formData.estimatedQuantity,
        deliveryRegion: formData.deliveryRegion || 'India',
        message: formData.message,
        agreeToTerms: true,
      });

      if (res.success) {
        setIsSuccess(true);
      } else {
        setErrorMsg('Failed to submit enquiry. Please try again.');
      }
    } catch {
      setErrorMsg('An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#FFFCF8] rounded-2xl shadow-2xl max-w-lg w-full max-h-[92vh] overflow-y-auto p-5 sm:p-8 border border-stone-200 relative animate-in fade-in zoom-in-95 duration-200 my-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-5 sm:right-5 text-stone-400 hover:text-stone-800 p-2 rounded-full hover:bg-stone-100 transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-green-100 text-[#267B43] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl text-[#1C2C40]">Enquiry Received</h3>
            <p className="text-sm text-stone-600 max-w-sm mx-auto">
              Thank you for inquiring about <span className="font-semibold text-stone-900">{product.name}</span>. Our trade sales team will get back to you shortly with pricing and carton options.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-7 py-2.5 bg-[#C9184A] text-white text-xs uppercase tracking-wider font-semibold rounded-full hover:bg-[#a5133c] transition-colors shadow-sm"
            >
              Close
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#C9184A] block mb-1">
                PRICE & CARTON ENQUIRY
              </span>
              <h3 className="font-serif text-2xl text-[#1C2C40]">
                {product.name}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Share your volume requirement and our commercial sales team will provide bespoke pricing.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 text-xs rounded border border-red-200">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Full name"
                    className="w-full px-3 py-2 rounded border border-stone-300 focus:border-[#C9184A] focus:outline-none bg-white text-stone-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Company / Business *</label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="Bakery / Company"
                    className="w-full px-3 py-2 rounded border border-stone-300 focus:border-[#C9184A] focus:outline-none bg-white text-stone-900 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-3 py-2 rounded border border-stone-300 focus:border-[#C9184A] focus:outline-none bg-white text-stone-900 text-xs"
                  />
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91..."
                    className="w-full px-3 py-2 rounded border border-stone-300 focus:border-[#C9184A] focus:outline-none bg-white text-stone-900 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Format / Volume</label>
                  <select
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    className="w-full px-3 py-2 rounded border border-stone-300 focus:border-[#C9184A] focus:outline-none bg-white text-stone-900 text-xs"
                  >
                    <option value="250g Retail Pouches">250g Retail Pouches</option>
                    <option value="10kg Master Carton">10kg Master Carton</option>
                    <option value="15kg Master Carton">15kg Master Carton</option>
                    <option value="20kg Master Carton">20kg Master Carton</option>
                    <option value="Multiple Cartons (500kg+)">Multiple Cartons (500kg+)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-700 font-medium mb-1">Delivery City</label>
                  <input
                    type="text"
                    value={formData.deliveryRegion}
                    onChange={(e) => setFormData({ ...formData, deliveryRegion: e.target.value })}
                    placeholder="e.g. Ahmedabad, Surat, Mumbai"
                    className="w-full px-3 py-2 rounded border border-stone-300 focus:border-[#C9184A] focus:outline-none bg-white text-stone-900 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-700 font-medium mb-1">Notes / Specific Requirements</label>
                <textarea
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:border-[#C9184A] focus:outline-none bg-[#FAF7F2] focus:bg-white text-stone-900 text-xs transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white uppercase tracking-wider font-semibold rounded-full text-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 min-h-[44px]"
                >
                  <span>{isSubmitting ? 'Submitting...' : 'Request Trade Pricing'}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

