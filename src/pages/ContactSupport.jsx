import ContactForm from '../components/contact/ContactForm';

const ContactSupport = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <ContactForm 
          type="support"
          title="Technical Support"
          description="Need help with your Bhatiyani Astute Intelligence solution? Our technical support team is here to assist you with any issues or questions."
          email="support@bhatiyaniai.com"
        />
      </div>
    </div>
  );
};

export default ContactSupport; 