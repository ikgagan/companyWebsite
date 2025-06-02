import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import ScrollToTopLink from '../common/ScrollToTopLink';

const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Computer Vision', to: '/product/computer-vision' },
      { name: 'AI Models', to: '/product/ai-models' },
      { name: 'Video Analytics', to: '/product/video-analytics' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { name: 'All Solutions', to: '/solutions' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', to: '/resources/blog' },
      { name: 'Case Studies', to: '/resources/case-studies' },
      { name: 'Documentation', to: '/resources/documentation' },
      { name: 'Research Papers', to: '/resources/research-papers' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', to: '/about' },
      { name: 'Careers', to: '/contact/careers' },
      { name: 'Terms & Conditions', to: '/terms' },
      { name: 'Privacy Policy', to: '/privacy' }
    ]
  }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    href: 'https://linkedin.com'
  },
  {
    name: 'Twitter',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ),
    href: 'https://twitter.com'
  },
  {
    name: 'GitHub',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    href: 'https://github.com'
  },
  {
    name: 'YouTube',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
      </svg>
    ),
    href: 'https://youtube.com'
  }
];

const FooterLinkItem = ({ link }) => {
  return (
    <li>
      <ScrollToTopLink
        to={link.to}
        className="text-secondary-300 hover:text-primary-400 transition-colors"
      >
        {link.name}
      </ScrollToTopLink>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-secondary-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Company Info */}
          <motion.div 
            className="lg:col-span-2"
            variants={fadeInUp}
          >
            <Link to="/" className="text-2xl font-heading font-bold text-primary-400 mb-4 inline-block">
              Bhatiyani Astute Intelligence
            </Link>
            <p className="text-secondary-300 mt-4 max-w-xs">
              Pioneering the future of computer vision and AI-powered video analytics to transform businesses and improve lives.
            </p>

            <div className="mt-6">
              <h4 className="text-white font-medium mb-3">Contact Us</h4>
              <p className="text-secondary-300 mb-2">
                # 23, 1st Floor, 5th Cross, Ghandinagar,
                <br />
                Bengaluru, Karnataka, India 560009
              </p>
              <p className="text-secondary-300 mb-2">
                <a href="tel:+919480603623" className="hover:text-primary-400 transition-colors">
                  +91 9480603623
                </a>
                <br />
                <a href="tel:+917325849545" className="hover:text-primary-400 transition-colors">
                  +91 7325849545
                </a>
                <br />
                <a href="tel:+919845043204" className="hover:text-primary-400 transition-colors">
                  +91 9845043204
                </a>
              </p>
              <p className="text-secondary-300">
                <a href="mailto:AdhipSarda@bhatiyaniai.com" className="hover:text-primary-400 transition-colors">
                  AdhipSarda@bhatiyaniai.com
                </a>
              </p>
            </div>

            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-400 hover:text-primary-400 transition-colors"
                  aria-label={`${social.name} link`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((column) => (
            <motion.div key={column.title} variants={fadeInUp}>
              <h3 className="font-heading font-medium text-lg mb-4 text-white">
                {column.title}
              </h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <FooterLinkItem key={link.name} link={link} />
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              &copy; {new Date().getFullYear()} Bhatiyani Astute Intelligence. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li>
                  <ScrollToTopLink to="/terms" className="text-secondary-400 hover:text-white transition-colors">
                    Terms & Conditions
                  </ScrollToTopLink>
                </li>
                <li>
                  <ScrollToTopLink to="/privacy" className="text-secondary-400 hover:text-white transition-colors">
                    Privacy Policy
                  </ScrollToTopLink>
                </li>
                <li>
                  <ScrollToTopLink to="/find-us" className="text-secondary-400 hover:text-white transition-colors">
                    Find Us
                  </ScrollToTopLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 