import { object, string } from 'zod';

export const contactSchema = object({
  name: string().nonempty('Please enter your name.'),
  email: string().email('Please enter a valid email address.'),
  subject: string().nonempty('Please enter a subject.'),
  message: string().nonempty('Please enter your message.'),
});
