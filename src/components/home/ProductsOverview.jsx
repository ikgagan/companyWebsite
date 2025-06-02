import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const products = [
  {
    id: 1,
    title: 'Computer Vision Solutions',
    description: 'Advanced object detection, facial recognition, and motion analysis systems that turn visual data into actionable insights.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    link: '/product/computer-vision',
    color: 'from-primary-600 to-primary-400'
  },
  {
    id: 2,
    title: 'AI Models & Learning Systems',
    description: 'Custom machine learning models trained on your data to solve specific challenges and continuously improve over time.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    link: '/product/ai-models',
    color: 'from-secondary-600 to-secondary-400'
  },
  {
    id: 3,
    title: 'Video Analytics Platform',
    description: 'Real-time video stream processing and analytics with intuitive dashboards to visualize trends and extract meaningful data.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    link: '/product/video-analytics',
    color: 'from-accent-500 to-accent-300'
  }
];

const ProductsOverview = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Products"
          title="Powerful AI & Computer Vision Solutions"
          description="Discover our suite of innovative products designed to help businesses leverage the power of computer vision and AI technology."
          centered={true}
          className="mb-12"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white dark:bg-secondary-900 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              variants={fadeInUp}
            >
              <div className={`bg-gradient-to-r ${product.color} p-6 flex justify-center items-center text-white`}>
                {product.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 dark:text-white">{product.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-4">{product.description}</p>
                <Link 
                  to={product.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link 
            to="/product" 
            className="btn btn-outline"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsOverview; 