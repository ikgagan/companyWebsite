import ContactForm from '../components/contact/ContactForm';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const PartnershipSection = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary-500 mr-2">•</span>
          <div>
            <span className="font-medium text-secondary-900 dark:text-white">{item.title}:</span>
            <span className="text-secondary-600 dark:text-secondary-300 ml-1">{item.description}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ConsultationSection = ({ items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-bold mb-4 text-primary-600 dark:text-primary-400">Schedule Your AI Transformation Consultation</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="text-primary-500 mr-2">•</span>
          <div>
            <span className="font-medium text-secondary-900 dark:text-white">{item.title}:</span>
            <span className="text-secondary-600 dark:text-secondary-300 ml-1">{item.description}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const ContactSales = () => {
  const researchItems = [
    { title: "University Partnerships", description: "Joint research and development programs" },
    { title: "Technology Transfer", description: "Commercialize cutting-edge research" },
    { title: "Talent Development", description: "Internship and graduate placement programs" },
    { title: "Grant Applications", description: "Collaborative funding for breakthrough innovations" }
  ];

  const expansionItems = [
    { title: "Technology Licensing", description: "International market expansion opportunities" },
    { title: "Joint Ventures", description: "Strategic partnerships for market penetration" },
    { title: "Distributor Network", description: "Authorized partner program development" },
    { title: "Franchise Models", description: "Scalable business expansion frameworks" }
  ];

  const consultationItems = [
    { title: "Virtual Demo", description: "45-minute comprehensive technology showcase" },
    { title: "ROI Analysis", description: "Customized business impact assessment" },
    { title: "Pilot Program", description: "Risk-free implementation trial" },
    { title: "Implementation Roadmap", description: "Step-by-step deployment planning" }
  ];

  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="bg-secondary-50 dark:bg-secondary-900 p-8 rounded-lg shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-6 dark:text-white">Innovation Partnership Opportunities</h2>
              
              <PartnershipSection 
                title="Research Collaboration" 
                items={researchItems} 
              />
              
              <PartnershipSection 
                title="Global Expansion" 
                items={expansionItems} 
              />
              
              <ConsultationSection items={consultationItems} />
              
              <div className="mt-8 pt-6 border-t border-secondary-200 dark:border-secondary-700">
                <h3 className="text-lg font-semibold mb-3 text-primary-600 dark:text-primary-400">Innovation Team:</h3>
                <p className="text-secondary-700 dark:text-secondary-300 flex items-center mb-2">
                  <span className="mr-2">📞</span>
                  <a href="tel:+919480603626" className="font-medium hover:underline">
                    +91 9480603626
                  </a>
                </p>
                <p className="text-secondary-700 dark:text-secondary-300 flex items-center">
                  <span className="mr-2">📧</span>
                  <a href="mailto:innovation@bhatiyani.com" className="font-medium hover:underline">
                    innovation@bhatiyani.com
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-3">
            <ContactForm 
              type="sales"
              title="Talk to Sales"
              subtitle="Get in Touch"
              description="Interested in learning how our AI solutions can transform your business? Fill out the form below and our sales team will contact you shortly."
              email="innovation@bhatiyani.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSales; 