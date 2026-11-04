import { z } from 'zod';

export const bulkInquirySchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  companyName: z.string().min(2, 'Please enter your company or business name'),
  email: z.string().email('Please enter a valid business email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  businessType: z.string().min(1, 'Please select your business type'),
  productInterest: z.string().min(1, 'Please select the product of interest'),
  estimatedQuantity: z.string().min(1, 'Please specify your volume or carton preference'),
  deliveryRegion: z.string().min(2, 'Please specify your delivery city/region'),
  message: z.string().min(5, 'Please provide details about your requirement'),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree before submitting',
  }),
});

export type BulkInquiryFormData = z.infer<typeof bulkInquirySchema>;

