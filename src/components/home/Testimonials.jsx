import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { fadeIn } from '../../utils/animations';

const testimonials = [
  {
    id: 1,
    content: "Bhatiyani's computer vision solution transformed our inventory management. We've seen 40% cost reduction and 95% accuracy improvement. The automated inventory tracking system was implemented in just one month with a 320% return on investment.",
    author: "Rajesh Kumar",
    position: "Operations Director, Jaguar Petropacks Pvt Ltd",
    companyName: "Jaguar Petropacks Pvt Ltd",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    project: "Automated inventory tracking system",
    duration: "1 month implementation",
    roi: "320% return on investment"
  },
  {
    id: 2,
    content: "The predictive maintenance system prevented 3 major equipment failures last quarter, saving us over ₹50 lakhs in potential losses. Our comprehensive deployment included heavy machinery monitoring, automated inventory tracking, and a dock management system.",
    author: "Priya Sharma",
    position: "Production Manager, Klene Paks",
    companyName: "Klene Paks",
    image: "https://images.unsplash.com/photo-1573497019236-61e1a8b00b3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    project: "Heavy machinery monitoring, Automated inventory tracking system, Docking management system",
    duration: "2 months deployment",
    roi: "280% return on investment"
  },
  {
    id: 3,
    content: "Quality inspection time reduced from 2 hours to 15 minutes per batch. The AI system catches defects our human inspectors missed. The automated quality control implementation has delivered a remarkable 400% return on investment in just two months.",
    author: "Vikram Singh",
    position: "Quality Control Head, Triveni Steel",
    companyName: "Triveni Steel",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    project: "Automated quality control",
    duration: "2 months implementation",
    roi: "400% return on investment"
  },
  {
    id: 4,
    content: "The security system with theft detection has eliminated all inventory shrinkage. It pays for itself monthly. The AI-powered security monitoring and diamond detection implementation has provided us with a 250% return on investment.",
    author: "Ananya Patel",
    position: "Security Director, Krishna Diamond & Jewelry",
    companyName: "Krishna Diamond & Jewelry",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    project: "AI-powered security monitoring, diamond detection",
    duration: "3 months implementation",
    roi: "250% return on investment"
  },
  {
    id: 5,
    content: "Dock management efficiency improved by 60%. Trucks are processed faster, and communication errors are eliminated. The diamond counting and 3D reconstruction implementation has proven to be an excellent investment.",
    author: "Rahul Verma",
    position: "Operations Manager, Vijay Gems",
    companyName: "Vijay Gems",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    project: "Diamond counting, 3D reconstruction",
    duration: "3 months implementation",
    roi: "190% return on investment"
  },
  {
    id: 6,
    content: "The comprehensive AI solution covers everything from inventory to security. Best technology investment we've made. Our complete warehouse automation deployment over 12 months delivered an exceptional 350% return on investment.",
    author: "Sanjay Reddy",
    position: "CEO, Bethala Petrohacks Pvt Ltd",
    companyName: "Bethala Petrohacks Pvt Ltd",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=120&q=80",
    project: "Complete warehouse automation",
    duration: "12 months full deployment",
    roi: "350% return on investment"
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-primary-700 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'white\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/svg%3E")', backgroundSize: '30px 30px' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <SectionTitle
          subtitle="Success Stories"
          title="What Our Clients Say"
          description="Discover how our AI and computer vision solutions have helped businesses achieve remarkable ROI across various industries."
          centered={true}
          light={true}
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto relative">
          {/* Large quote mark */}
          <svg 
            className="absolute -top-16 -left-16 h-32 w-32 text-white opacity-20" 
            fill="currentColor" 
            viewBox="0 0 32 32"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>

          {/* Testimonials carousel */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className={`${active === index ? 'block' : 'hidden'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white">{testimonial.companyName}</h3>
                </div>

                <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-center">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="bg-white/10 rounded-lg p-4 max-w-2xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-primary-200 block">Project:</span>
                      <p className="text-white font-medium">{testimonial.project}</p>
                    </div>
                    <div>
                      <span className="text-primary-200 block">Duration:</span>
                      <p className="text-white font-medium">{testimonial.duration}</p>
                    </div>
                    <div>
                      <span className="text-primary-200 block">ROI:</span>
                      <p className="text-white font-medium">{testimonial.roi}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 focus:outline-none transition-colors duration-300 ${
                  active === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                onClick={() => setActive(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Company logos */}
        <motion.div 
          className="mt-20"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-center text-primary-200 mb-8">Trusted by leading companies in India</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center px-6 w-full">
              <div className="text-white font-bold">Jaguar Petropacks</div>
            </div>
            <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center px-6 w-full">
              <div className="text-white font-bold">Klene Paks</div>
            </div>
            <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center px-6 w-full">
              <div className="text-white font-bold">Triveni Steel</div>
            </div>
            <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center px-6 w-full">
              <div className="text-white font-bold">Krishna Diamond</div>
            </div>
            <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center px-6 w-full">
              <div className="text-white font-bold">Vijay Gems</div>
            </div>
            <div className="h-12 bg-white/10 rounded-lg flex items-center justify-center px-6 w-full">
              <div className="text-white font-bold">Bethala Petrohacks</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 