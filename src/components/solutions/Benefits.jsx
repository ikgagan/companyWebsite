import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeInUp, fadeInRight, fadeInLeft } from '../../utils/animations';
import SectionTitle from '../common/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const benefitsList = [
  {
    id: 1,
    title: 'Increased Efficiency',
    description: 'Reduce manual effort and streamline operations with automated monitoring.'
  },
  {
    id: 2,
    title: 'Cost Saving',
    description: 'Minimize inventory losses, prevent theft, and optimize resource allocation.'
  },
  {
    id: 3,
    title: 'Improved Accuracy',
    description: 'AI-driven analysis eliminates human errors in inventory management and quality control.'
  },
  {
    id: 4,
    title: 'Enhanced Security',
    description: 'AI-based surveillance detects anomalies and unauthorized activities in real time.'
  },
  {
    id: 5,
    title: 'Real-time Decision Making',
    description: 'Edge computing and cloud-based analytics provide instant insights for faster responses.'
  },
  {
    id: 6,
    title: 'Scalability & Flexibility',
    description: 'Our solutions adapt to businesses of all sizes and industries.'
  },
  {
    id: 7,
    title: 'Compliance & Safety',
    description: 'Ensure workplace safety with automated heavy machinery monitoring and regulatory compliance.'
  }
];

const uspList = [
  {
    id: 1,
    title: 'Leverages Existing CCTV Infrastructure',
    description: 'No need for additional hardware investments; we enhance your current systems with AI-driven capabilities.'
  },
  {
    id: 2,
    title: 'Custom AI Solutions for Every Client',
    description: 'Tailored to specific business needs, ensuring maximum efficiency and accuracy.'
  },
  {
    id: 3,
    title: 'Seamless Integration & Scalability',
    description: 'Easily adaptable to different industries and operational scales.'
  }
];

const Benefits = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [uspRef, uspIsVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-900 overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            variants={fadeInLeft}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            ref={ref}
          >
            <SectionTitle
              subtitle="Benefits"
              title="Why Choose Our AI Solutions"
              description="Our AI-driven automation helps businesses gain a competitive edge."
              className="mb-10"
            />
            
            <div className="space-y-6">
              {benefitsList.map((benefit) => (
                <motion.div 
                  key={benefit.id}
                  className="flex gap-4"
                  variants={fadeInUp}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.1 * benefit.id }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-secondary-900 dark:text-white">{benefit.title}</h3>
                    <p className="text-secondary-600 dark:text-secondary-300">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            variants={fadeInRight}
            initial="hidden"
            animate={uspIsVisible ? "visible" : "hidden"}
            ref={uspRef}
          >
            <SectionTitle
              subtitle="Unique Selling Proposition"
              title="What Sets Us Apart"
              description="Our approach to AI solutions is designed with your business needs in mind."
              className="mb-10"
            />
            
            <div className="bg-white dark:bg-secondary-800 rounded-xl p-8 shadow-lg">
              {uspList.map((usp, index) => (
                <motion.div 
                  key={usp.id}
                  variants={fadeInUp}
                  initial="hidden"
                  animate={uspIsVisible ? "visible" : "hidden"}
                  transition={{ delay: 0.2 * usp.id }}
                >
                  <div className="flex gap-4 mb-8">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-accent-600 dark:text-accent-400 font-bold text-xl">
                      {usp.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-secondary-900 dark:text-white">{usp.title}</h3>
                      <p className="text-secondary-600 dark:text-secondary-300">{usp.description}</p>
                    </div>
                  </div>
                  {index < uspList.length - 1 && (
                    <div className="border-b border-secondary-200 dark:border-secondary-700 my-6"></div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 p-6 bg-primary-600 dark:bg-primary-900 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Ready to Transform Your Business?</h3>
              <p className="mb-4">Get in touch with our team to discuss how our AI solutions can help your specific needs.</p>
              <Link 
                to="/contact/sales" 
                className="inline-flex items-center px-5 py-2.5 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors"
              >
                Contact Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Benefits; 