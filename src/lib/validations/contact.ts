import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select how we can help'),
  message: z.string().min(5, 'Please write your message'),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree before submitting',
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

