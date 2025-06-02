import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import useScrollAnimation from '../../hooks/useScrollAnimation';

const teamMembers = [
  {
    id: 1,
    name: 'Adhip Sarda',
    title: 'Founder & CEO',
    bio: 'Adhip has over 15 years of experience in computer vision and machine learning. She previously led AI research teams at Google and Stanford University.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    linkedin: 'https://linkedin.com',
    email: 'AdhipSarda@bhatiyaniai.com'
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    title: 'CTO',
    bio: 'Michael specializes in deep learning and neural networks. He has developed pioneering algorithms for object detection and tracking.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    linkedin: 'https://linkedin.com',
    email: 'AdhipSarda@bhatiyaniai.com'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    title: 'VP of Product',
    bio: 'Sarah brings a wealth of experience in product management and development. She excels at translating complex technical capabilities into customer solutions.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
    linkedin: 'https://linkedin.com',
    email: 'AdhipSarda@bhatiyaniai.com'
  }
];

const Team = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Leadership"
          title="Meet the Visionaries Behind Bhatiyani Astute Intelligence"
          description="Our team combines expertise in AI, computer vision, and business transformation."
          centered={true}
          className="mb-16"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="card group"
              variants={fadeInUp}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 to-transparent flex items-end">
                  <div className="p-6 w-full">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-primary-300 mb-3">{member.title}</p>
                    <div className="flex space-x-3">
                      <a 
                        href={member.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-white/10 hover:bg-primary-600 rounded-full transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                      <a 
                        href={`mailto:${member.email}`} 
                        className="p-2 bg-white/10 hover:bg-primary-600 rounded-full transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-secondary-600 dark:text-secondary-300">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-secondary-600 dark:text-secondary-300 mb-8">
            Our team of 50+ experts includes PhDs and industry veterans from top universities and tech companies around the world.
          </p>
          <a 
            href="/contact/careers" 
            className="btn btn-outline"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  );
};

export default Team; 