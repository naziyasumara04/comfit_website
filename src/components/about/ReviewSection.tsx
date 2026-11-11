'use client';

import React, { useState } from 'react';
import { Star, Send, CheckCircle2, MessageSquarePlus, Sparkles, X } from 'lucide-react';

interface Review {
  id: string;
  name: string;
  role?: string;
  city?: string;
  quote: string;
  bgColor: string; // Hex or tailwind bg class
}

const INITIAL_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'RAJESH PATEL',
    role: 'Bakery Owner',
    city: 'Ahmedabad',
    quote: 'Amazing quality and freshness. It reminds me of the traditional snacks we enjoyed as kids.',
    bgColor: '#E5A93C', // Warm golden amber from Screenshot 2
  },
  {
    id: 'rev-2',
    name: 'ANANYA SHARMA',
    role: 'Pastry Chef',
    city: 'Mumbai',
    quote: 'The Tutti Frutti is fresh, crunchy and perfectly sweet. Every bite feels nostalgic.',
    bgColor: '#0284C7', // Vivid blue from Screenshot 2
  },
  {
    id: 'rev-3',
    name: 'AMAN MEHTA',
    role: 'Confectioner',
    city: 'Vadodara',
    quote: 'Light, colourful and full of flavour. The quality is really impressive.',
    bgColor: '#C9184A', // Signature Comfit crimson from Screenshot 2
  },
];

const CARD_COLORS = ['#E5A93C', '#0284C7', '#C9184A'];

export const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [isFormOpen, setIsFormOpen] = useState(true);

  // Form states
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [city, setCity] = useState('');
  const [product, setProduct] = useState('Rainbow Mix');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const getRatingLabel = (val: number) => {
    switch (val) {
      case 5:
        return '5 Stars · Exceptional Quality';
      case 4:
        return '4 Stars · Great Taste & Freshness';
      case 3:
        return '3 Stars · Good Product';
      case 2:
        return '2 Stars · Average Experience';
      default:
        return '1 Star · Needs Improvement';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !reviewText.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Pick next color cyclically
      const nextColor = CARD_COLORS[reviews.length % CARD_COLORS.length];

      const newReview: Review = {
        id: 'rev-' + Date.now(),
        name: name.trim().toUpperCase(),
        role: role.trim() || undefined,
        city: city.trim() || undefined,
        quote: reviewText.trim(),
        bgColor: nextColor,
      };

      setReviews([newReview, ...reviews]);
      setIsSubmitting(false);
      setSubmittedSuccess(true);

      // Reset fields
      setName('');
      setRole('');
      setCity('');
      setReviewText('');
      setRating(5);

      setTimeout(() => {
        setSubmittedSuccess(false);
      }, 6000);
    }, 400);
  };

  return (
    <section className="bg-[#FFFCF8] py-16 sm:py-24 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading: Exact Reference 2 Typography */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#1C2C40] tracking-wide uppercase font-normal leading-tight">
            GOOD WORDS. SWEET MEMORIES.
          </h2>
        </div>

        {/* 3 Main Solid Colorful Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              style={{ backgroundColor: rev.bgColor }}
              className="rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-9 text-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between min-h-[200px] sm:min-h-[220px]"
            >
              {/* Quote text in Serif Italic */}
              <blockquote className="font-serif italic text-sm sm:text-base lg:text-lg leading-relaxed text-white">
                &ldquo;{rev.quote}&rdquo;
              </blockquote>

              {/* Author in bold uppercase sans-serif */}
              <div className="mt-6 sm:mt-8 pt-3.5 sm:pt-4 border-t border-white/20 flex items-center justify-between">
                <div>
                  <span className="text-white/95 text-xs font-bold tracking-widest uppercase block font-sans">
                    — {rev.name}
                  </span>
                  {(rev.role || rev.city) && (
                    <span className="text-white/80 text-[11px] block mt-0.5">
                      {[rev.role, rev.city].filter(Boolean).join(' · ')}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 text-white/90 fill-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review Form Header & Card */}
        <div className="pt-2 sm:pt-6">
          {/* Success Alert Banner */}
          {submittedSuccess && (
            <div className="max-w-3xl mx-auto mb-6 p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start space-x-3.5 text-emerald-900 shadow-sm animate-in fade-in duration-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-sm">Review Submitted Successfully!</h4>
                <p className="text-xs text-emerald-700 mt-0.5">
                  Thank you for celebrating with Comfit Foods. Your words have been added to our sweet wall of memories above!
                </p>
              </div>
            </div>
          )}

          {isFormOpen ? (
            <div className="max-w-3xl mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border border-stone-200/90 shadow-xl transition-all duration-300">
              <div className="flex items-start justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 sm:pb-5 border-b border-stone-100">
                <div className="space-y-1.5">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-pink-50 border border-pink-200/80 text-[10px] uppercase tracking-widest font-semibold text-[#C9184A]">
                    <Sparkles className="w-3 h-3 text-[#C9184A]" />
                    <span>COMMUNITY VOICES</span>
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#1C2C40] tracking-tight">
                    Share Your Comfit Experience
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
                    Whether you bake at home, run a professional bakery, or distribute confectionery — tell us how our Tutti Frutti tasted!
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  title="Minimize form"
                  className="p-2 text-stone-400 hover:text-stone-600 hover:bg-stone-100 rounded-full transition-colors flex-shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Star Rating Picker */}
              <div className="bg-[#FAF7F2] p-4 sm:p-5 rounded-2xl border border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-stone-700 block">
                    Your Rating *
                  </span>
                  <span className="text-[11px] text-[#C9184A] font-medium block mt-0.5">
                    {getRatingLabel(hoverRating || rating)}
                  </span>
                </div>

                <div className="flex items-center space-x-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 focus:outline-none transition-transform hover:scale-125"
                    >
                      <Star
                        className={`w-6 h-6 transition-colors ${
                          star <= (hoverRating || rating)
                            ? 'text-[#E5A93C] fill-[#E5A93C]'
                            : 'text-stone-300 fill-transparent'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Full Name <span className="text-[#C9184A]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priyesh Patel"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C9184A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Role / Business (Optional)
                  </label>
                  <input
                    type="text"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    placeholder="e.g. Master Baker / Sweet Crown"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C9184A] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    City / State (Optional)
                  </label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Surat, Gujarat"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C9184A] focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                    Product Used
                  </label>
                  <select
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C9184A] focus:bg-white transition-colors"
                  >
                    <option value="Rainbow Mix">Rainbow Mix (Assorted Tutti Frutti)</option>
                    <option value="Red Tutti Frutti">Red Tutti Frutti</option>
                    <option value="Green Tutti Frutti">Green Tutti Frutti</option>
                    <option value="Yellow Tutti Frutti">Yellow Tutti Frutti</option>
                    <option value="Bulk Cartons">Bulk Cartons (Bakery Supply)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1.5">
                  Your Review / Experience <span className="text-[#C9184A]">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Share details on fruit crunch, colour retention during baking, authentic sweetness, packaging..."
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50/50 text-stone-900 text-xs sm:text-sm focus:outline-none focus:border-[#C9184A] focus:bg-white transition-colors"
                />
              </div>

              {/* Form Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-100">
                <span className="text-[11px] text-stone-400 text-center sm:text-left">
                  Reviews are instantly verified and published to the website.
                </span>

                <div className="flex items-center space-x-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setIsFormOpen(false)}
                    className="w-1/2 sm:w-auto px-5 py-3 rounded-xl border border-stone-200 text-stone-600 hover:text-stone-900 text-xs uppercase tracking-wider font-semibold transition-colors min-h-[44px]"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-1/2 sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs uppercase tracking-wider font-semibold rounded-xl shadow-sm hover:shadow-md transition-all disabled:opacity-60 min-h-[44px]"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Posting...' : 'Submit Review'}</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center pt-2 px-2">
            <button
              type="button"
              onClick={() => setIsFormOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-5 sm:px-7 py-3.5 bg-[#C9184A] hover:bg-[#a5133c] text-white text-xs uppercase tracking-wider font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 group min-h-[44px]"
            >
              <MessageSquarePlus className="w-4 h-4 transition-transform group-hover:scale-110 flex-shrink-0" />
              <span>Write a Review / Share Your Story</span>
            </button>
          </div>
        )}
      </div>

    </div>
  </section>
);
};