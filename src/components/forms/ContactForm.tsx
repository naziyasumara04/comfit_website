'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, CheckCircle, AlertCircle } from 'lucide-react';
import { contactFormSchema, ContactFormData } from '@/lib/validations/contact';
import { submitContactMessage } from '@/services/contact.service';

export const ContactForm: React.FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setErrorMessage('');
    try {
      const res = await submitContactMessage(data);
      if (res.success) {
        setIsSuccess(true);
        reset();
      } else {
        setErrorMessage(res.error || 'Failed to submit message. Please try again.');
      }
    } catch {
      setErrorMessage('A network error occurred. Please try again later.');
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200/90 shadow-sm">
      <div className="mb-6">
        <h3 className="font-serif text-2xl sm:text-3xl text-[#1C2C40]">
          Leave us a little note.
        </h3>
        <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
          Tell us how we can help. For a detailed commercial requirement, our bulk order enquiry is the best starting point.
        </p>
      </div>

      {isSuccess && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-start space-x-3">
          <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-emerald-800">
            <p className="font-semibold">Message sent successfully!</p>
            <p className="mt-0.5">Thank you for reaching out. A representative from Comfit Foods will respond shortly.</p>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Full name *
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register('name')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.name
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.name && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.name.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Email address *
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.email
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            />
            {errors.email && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              Phone number (optional)
            </label>
            <input
              type="tel"
              placeholder="Country code & number"
              {...register('phone')}
              className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:border-[#C9184A] text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-stone-700 mb-1">
              How can we help? *
            </label>
            <select
              {...register('subject')}
              className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.subject
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-stone-300 focus:border-[#C9184A]'
                }`}
            >
              <option value="">Select a subject</option>
              <option value="Product Information & Flavours">Product Information & Flavours</option>
              <option value="Sample Request">Sample Request</option>
              <option value="Retail Distribution">Retail Distribution</option>
              <option value="Quality & Specification">Quality & Specification</option>
              <option value="General Conversation">General Conversation</option>
            </select>
            {errors.subject && (
              <span className="text-[11px] text-red-500 mt-1 block">
                {errors.subject.message}
              </span>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium text-stone-700 mb-1">
            Your message *
          </label>
          <textarea
            rows={4}
            placeholder="A product question, a specification request, or something you'd like to share..."
            {...register('message')}
            className={`w-full px-3.5 py-2.5 rounded-lg border text-xs sm:text-sm bg-white text-stone-900 focus:outline-none transition-colors ${errors.message
                ? 'border-red-400 focus:border-red-500'
                : 'border-stone-300 focus:border-[#C9184A]'
              }`}
          />
          {errors.message && (
            <span className="text-[11px] text-red-500 mt-1 block">
              {errors.message.message}
            </span>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-start space-x-2 pt-1">
          <input
            type="checkbox"
            id="agreeToTerms"
            {...register('agreeToTerms')}
            className="mt-1 w-4 h-4 text-[#C9184A] border-stone-300 rounded focus:ring-[#C9184A]"
          />
          <label htmlFor="agreeToTerms" className="text-[11px] text-stone-500 leading-normal">
            I agree to Comfit Foods using my details to respond to this enquiry. Please do not send sensitive personal information.
          </label>
        </div>
        {errors.agreeToTerms && (
          <span className="text-[11px] text-red-500 block">
            {errors.agreeToTerms.message}
          </span>
        )}

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-full transition-all duration-200 group shadow-md hover:shadow-lg disabled:opacity-70"
          >
            <span>{isSubmitting ? 'Sending message...' : 'Send your message'}</span>
            <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </form>
    </div>
  );
};

