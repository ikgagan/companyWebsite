import ContactForm from '../components/contact/ContactForm';

const ContactSales = () => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <ContactForm 
          type="sales"
          title="Talk to Sales"
          subtitle="Get in Touch"
          description="Interested in learning how our AI solutions can transform your business? Fill out the form below and our sales team will contact you shortly."
          email="AdhipSarda@bhatiyaniai.com"
        />
      </div>
    </div>
  );
};

export default ContactSales; 