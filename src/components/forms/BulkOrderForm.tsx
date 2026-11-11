'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, CheckCircle, AlertCircle, UploadCloud } from 'lucide-react';
import { bulkInquirySchema, BulkInquiryFormData } from '@/lib/validations/inquiry';
import { submitBulkInquiry } from '@/services/inquiry.service';

interface BulkOrderFormProps {
  initialProduct?: string;
}

export const BulkOrderForm: React.FC<BulkOrderFormProps> = ({ initialProduct = '' }) => {
  const searchParams = useSearchParams();
  const productParam = searchParams?.get('product') || initialProduct;
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileName, setFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<BulkInquiryFormData>({
    resolver: zodResolver(bulkInquirySchema),
    defaultValues: {
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      businessType: '',
      productInterest: productParam || '',
      estimatedQuantity: '',
      deliveryRegion: '',
      message: '',
      agreeToTerms: false,
    },
  });

  useEffect(() => {
    if (productParam) {
      if (productParam.includes('red')) setValue('productInterest', 'Red Tutti Frutti');
      else if (productParam.includes('green')) setValue('productInterest', 'Green Tutti Frutti');
      else if (productParam.includes('yellow')) setValue('productInterest', 'Yellow Tutti Frutti');
      else if (productParam.includes('rainbow')) setValue('productInterest', 'Rainbow Mix');
      else setValue('productInterest', productParam);
    }
  }, [productParam, setValue]);

  const onSubmit = async (data: BulkInquiryFormData) => {
    setErrorMessage('');
    try {
      const res = await submitBulkInquiry(data);
      if (res.success) {
        setIsSuccess(true);
        reset();
        setFileName(null);
      } else {
        setErrorMessage(res.error || 'Failed to submit trade inquiry. Please check your details.');
      }
    } catch {
      setErrorMessage('A network error occurred. Please try again later.');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-8 lg:p-10 rounded-2xl border border-stone-200 shadow-sm w-full" id="trade-form">
      <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-6">
        <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1C2C40]">
          Your trade enquiry
        </h3>
        <span className="text-[10px] sm:text-[11px] text-stone-400 font-medium">
          * Required fields
        </span>
      </div>

      {isSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-emerald-800">
            <p className="font-semibold">Trade enquiry received!</p>
            <p className="mt-0.5">
              Thank you for reaching out to Comfit Foods. Our B2B commercial team will review your specifications and contact you shortly with tailored quotation details.
            </p>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm text-red-700">{errorMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Row 1: Name & Company */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Full name *
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register('fullName')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.fullName ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.fullName && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.fullName.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Company / business *
            </label>
            <input
              type="text"
              placeholder="Business name"
              {...register('companyName')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.companyName ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.companyName && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.companyName.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Email address *
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              {...register('email')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.email && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Phone number *
            </label>
            <input
              type="tel"
              placeholder="Country code & phone number"
              {...register('phone')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.phone ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.phone && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 3: Business Type & Product Interest */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Business type *
            </label>
            <select
              {...register('businessType')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.businessType ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            >
              <option value="">Bakery, distributor, retailer or other</option>
              <option value="Bakery / Industrial Bakery">Bakery / Industrial Bakery</option>
              <option value="Food Distributor / Wholesaler">Food Distributor / Wholesaler</option>
              <option value="Retail Chain / Supermarket">Retail Chain / Supermarket</option>
              <option value="Ice Cream & Dairy Manufacturer">Ice Cream & Dairy Manufacturer</option>
              <option value="Confectionery & Mithai Maker">Confectionery & Mithai Maker</option>
              <option value="Food Service / Hotel / Restaurant">Food Service / Hotel / Restaurant</option>
              <option value="Export / International Trade">Export / International Trade</option>
            </select>
            {errors.businessType && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.businessType.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Product of interest *
            </label>
            <select
              {...register('productInterest')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.productInterest ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            >
              <option value="">Choose from our four products</option>
              <option value="Red Tutti Frutti">Red Tutti Frutti</option>
              <option value="Green Tutti Frutti">Green Tutti Frutti</option>
              <option value="Yellow Tutti Frutti">Yellow Tutti Frutti</option>
              <option value="Rainbow Mix">Rainbow Mix</option>
              <option value="All Four Products / Mixed Assortment">All Four Products / Mixed Assortment</option>
            </select>
            {errors.productInterest && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.productInterest.message}
              </span>
            )}
          </div>
        </div>

        {/* Row 4: Volume Preference & Delivery Region */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Volume / carton preference *
            </label>
            <input
              type="text"
              placeholder="Estimated kg: 10kg / 15kg / 20kg carton"
              {...register('estimatedQuantity')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.estimatedQuantity ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.estimatedQuantity && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.estimatedQuantity.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Delivery region *
            </label>
            <input
              type="text"
              placeholder="City, state & country"
              {...register('deliveryRegion')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.deliveryRegion ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.deliveryRegion && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.deliveryRegion.message}
              </span>
            )}
          </div>
        </div>

        {/* Requirements Textarea */}
        <div>
          <label className="block text-xs font-medium text-stone-700 mb-1">
            Tell us about your requirements *
          </label>
          <textarea
            rows={3}
            placeholder="Share your intended application, product colours, volume and any packaging or documentation requirements."
            {...register('message')}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.message ? 'border-red-400' : 'border-stone-300 focus:border-[#C9184A]'
              }`}
          />
          {errors.message && (
            <span className="text-[11px] text-red-500 mt-1 block">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* File upload mock attachment */}
        <div>
          <label className="block text-xs font-medium text-stone-700 mb-1">
            Attach a specification (optional)
          </label>
          <label className="border border-dashed border-stone-300 rounded-lg p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 cursor-pointer hover:border-stone-400 bg-stone-50/50 transition-colors">
            <div className="flex items-center space-x-3">
              <UploadCloud className="w-5 h-5 text-[#C9184A] flex-shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-[#C9184A]">Choose a file</span>
                <span className="text-stone-500 ml-2 block sm:inline">Product brief or specification document</span>
              </div>
            </div>
            <span className="text-[11px] text-stone-400 truncate max-w-[200px]">
              {fileName || 'No file selected'}
            </span>
            <input type="file" onChange={handleFileChange} className="hidden" />
          </label>
        </div>

        {/* Checkbox */}
        <div className="flex items-start space-x-2.5 pt-1">
          <input
            type="checkbox"
            id="tradeAgree"
            {...register('agreeToTerms')}
            className="mt-1 w-4 h-4 text-[#C9184A] border-stone-300 rounded focus:ring-[#C9184A] flex-shrink-0"
          />
          <label htmlFor="tradeAgree" className="text-[11px] text-stone-500 leading-normal">
            I agree to Comfit Foods using my details to respond to this enquiry. Please do not send sensitive personal information.
          </label>
        </div>
        {errors.agreeToTerms && (
          <span className="text-[11px] text-red-500 block">
            {errors.agreeToTerms.message}
          </span>
        )}

        {/* Submit */}
        <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-200 group shadow-md hover:shadow-lg disabled:opacity-70 min-h-[44px]"
          >
            <span>{isSubmitting ? 'Sending trade enquiry...' : 'Send trade enquiry'}</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <p className="text-[11px] text-stone-400 sm:text-right sm:max-w-xs">
            This is an enquiry, not a confirmed order. Pricing and fulfilment details follow a discussion.
          </p>
        </div>
      </form>
    </div>
  );
};

