# EmailJS Setup Guide for Bhatiyani Astute Intelligence Website

This guide will walk you through the process of setting up EmailJS to make your contact forms fully functional.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account.
2. After signing in, you'll be taken to the dashboard.

## Step 2: Get Your Public Key

1. In the EmailJS dashboard, click on your username in the top-right corner.
2. Select "Account" from the dropdown menu.
3. Under the "API Keys" section, you'll find your "Public Key". Copy this value.

## Step 3: Create an Email Service

1. From the dashboard, click on the "Email Services" tab.
2. Click "Add New Service".
3. Select your email provider (Gmail, Outlook, etc.).
4. Follow the authentication steps to connect your email account.
5. Once connected, you'll get a "Service ID". Copy this value.

## Step 4: Create Email Templates

### Sales Inquiry Template:

1. From the dashboard, click on the "Email Templates" tab.
2. Click "Create New Template".
3. Enter a name for your template (e.g., "Sales Inquiry Form").
4. Design your email template. You can use the following variables:
   - {{from_name}} - The name of the person who submitted the form
   - {{from_email}} - Their email address
   - {{phone}} - Their phone number
   - {{subject}} - The subject of the inquiry
   - {{formatted_message}} - The formatted message with all details
   - {{submission_date}} - When the form was submitted
5. Example template:
   ```
   Subject: {{subject}}
   
   New Sales Inquiry from the Website:
   
   {{formatted_message}}
   
   This inquiry was submitted via the company website on {{submission_date}}.
   ```
6. Save the template and copy the "Template ID".

### Support Request Template (if needed):

1. Follow the same steps to create a template for support requests.
2. Copy the Template ID.

## Step 5: Update the Configuration File

1. Open the file `src/config/emailjs.js` in your project.
2. Replace the placeholder values with your actual values:
   ```javascript
   export const EMAILJS_CONFIG = {
     PUBLIC_KEY: "paste_your_public_key_here",
     SERVICE_ID: "paste_your_service_id_here",
     SALES_TEMPLATE_ID: "paste_your_sales_template_id_here",
     SUPPORT_TEMPLATE_ID: "paste_your_support_template_id_here"
   };
   ```

## Step 6: Test the Form

1. After saving the changes, restart your development server (if needed).
2. Fill out the sales inquiry form with test data.
3. Submit the form.
4. Check your email to confirm that you received the form submission.

## Troubleshooting

If you encounter any issues:

1. Check the browser console for specific error messages.
2. Verify that all IDs and keys are correctly copied without any extra spaces.
3. Ensure your EmailJS account is active and that you haven't exceeded the free tier limits (200 emails/month on the free plan).
4. Check that your email service is properly connected and authorized.

## EmailJS Free Plan Limitations

- 200 emails per month
- 2 email templates
- 1 email service

If you need more capacity, consider upgrading to a paid plan on the EmailJS website.

## Need Help?

If you need further assistance, please contact the website developer or refer to the [EmailJS documentation](https://www.emailjs.com/docs/). 