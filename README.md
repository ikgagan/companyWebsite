# Bhatiyani Astute Intelligence Company Website

This is the official website for Bhatiyani Astute Intelligence, showcasing our AI and computer vision solutions.

## Setup Instructions

1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Build for production with `npm run build`

## EmailJS Configuration

The contact forms use EmailJS to send emails without requiring a backend server. To configure this feature:

1. Sign up for a free account at [EmailJS](https://www.emailjs.com/)
2. Create a new email service (e.g., Gmail, Outlook, etc.)
3. Create email templates for sales and support inquiries with the following variables:
   - `to_email` - The recipient email address
   - `from_name` - The name of the person filling out the form
   - `from_email` - The email address of the person filling out the form
   - `phone` - The phone number provided (optional)
   - `subject` - The subject of the inquiry
   - `message` - The message content
   - `reply_to` - The reply-to email address (same as from_email)
   - `form_type` - The type of form (Sales Enquiry or Support Request)

4. Update the `src/config/emailjs.js` file with your EmailJS credentials:
   ```javascript
   export const EMAILJS_CONFIG = {
     PUBLIC_KEY: "your_public_key",
     SERVICE_ID: "your_service_id",
     SALES_TEMPLATE_ID: "your_sales_template_id",
     SUPPORT_TEMPLATE_ID: "your_support_template_id"
   };
   ```

## Project Structure

- `src/components` - Reusable UI components
- `src/pages` - Main page components
- `src/config` - Configuration files
- `src/utils` - Utility functions
- `src/context` - React context providers
- `public` - Static assets

## Technologies Used

- React.js
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- React Router

## Contact Information

For any questions or support regarding this website, please contact:
- Email: AdhipSarda@bhatiyaniai.com
- Phone: +91 9480603623
