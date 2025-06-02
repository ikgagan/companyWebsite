import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeInLeft, fadeInRight } from '../../utils/animations';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const solutions = [
  {
    id: 1,
    title: 'Inventory Counting & Management',
    description: 'AI-powered tracking and automation for stock monitoring. Our solution offers real-time visibility and control of your inventory.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/solutions',
    stats: [
      { value: '99%', label: 'Accuracy Rate' },
      { value: '60%', label: 'Time Saved' },
      { value: '40%', label: 'Cost Reduction' }
    ]
  },
  {
    id: 2,
    title: 'Heavy Machinery Monitoring',
    description: 'Real-time tracking of industrial equipment to ensure operational safety and efficiency. Prevent accidents and optimize usage.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/solutions',
    stats: [
      { value: '45%', label: 'Fewer Accidents' },
      { value: '30%', label: 'Maintenance Costs' },
      { value: '24/7', label: 'Monitoring' }
    ]
  },
  {
    id: 3,
    title: 'Quality Inspection & Security',
    description: 'Combining AI-driven defect detection and real-time anomaly detection for enhanced security in warehouses and factories.',
    image: 'https://images.unsplash.com/photo-1583310929905-250e9a6ae253?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    link: '/solutions',
    stats: [
      { value: '95%', label: 'Detection Rate' },
      { value: '80%', label: 'Faster Inspection' },
      { value: '50%', label: 'Reduced Theft' }
    ]
  }
];

const SolutionsOverview = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Solutions"
          title="AI-Powered Computer Vision Solutions"
          description="We leverage onsite edge devices, drones, and cloud infrastructure to provide real-time insights and automation for businesses across various industries."
          centered={true}
          className="mb-16"
        />

        <div ref={ref} className="space-y-24">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              <motion.div 
                className="w-full lg:w-1/2"
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <div className="relative rounded-xl overflow-hidden group">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-950/80 to-transparent flex items-end">
                    <div className="p-8 w-full">
                      <div className="grid grid-cols-3 gap-4 text-white">
                        {solution.stats.map((stat, i) => (
                          <div key={i} className="text-center">
                            <div className="text-2xl font-bold text-primary-300">{stat.value}</div>
                            <div className="text-sm text-secondary-200">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="w-full lg:w-1/2"
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
              >
                <h3 className="text-2xl font-bold mb-4 dark:text-white">{solution.title}</h3>
                <p className="text-secondary-600 dark:text-secondary-300 mb-6 text-lg">{solution.description}</p>
                
                <ul className="mb-6 space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700 dark:text-secondary-300">Real-time analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700 dark:text-secondary-300">AI-powered decision making</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-secondary-700 dark:text-secondary-300">Seamless integration with existing systems</span>
                  </li>
                </ul>

                <Link 
                  to="/solutions" 
                  className="btn btn-primary"
                >
                  Explore Our Solutions
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/solutions" 
            className="btn btn-outline"
          >
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsOverview; 