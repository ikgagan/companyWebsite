import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const particlesRef = useRef([]);
  const initialParticlesRef = useRef([]);
  
  // Increase the number of particles
  const particleCount = 100;
  const initialParticleCount = 50; // Particles that appear immediately

  // Generate random positions for particles
  useEffect(() => {
    // Main particles
    particlesRef.current = Array(particleCount).fill().map(() => ({
      x1: Math.random() * dimensions.width,
      y1: Math.random() * dimensions.height,
      x2: Math.random() * dimensions.width,
      y2: Math.random() * dimensions.height,
      size: Math.random() * 5 + 3,
      duration: 2 + Math.random() * 4,
      delay: Math.random() * 1.5
    }));
    
    // Initial particles that appear immediately
    initialParticlesRef.current = Array(initialParticleCount).fill().map(() => ({
      x1: Math.random() * dimensions.width,
      y1: Math.random() * dimensions.height,
      x2: Math.random() * dimensions.width,
      y2: Math.random() * dimensions.height,
      size: Math.random() * 5 + 3,
      duration: 2 + Math.random() * 3,
      delay: 0 // No delay for initial particles
    }));
  }, [dimensions, particleCount, initialParticleCount]);

  // Update dimensions on window resize
  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simulate loading progress
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsComplete(true), 500);
          return 100;
        }
        return prev + Math.floor(Math.random() * 10) + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  if (isComplete) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-secondary-950 z-50 flex flex-col items-center justify-center overflow-hidden"
      animate={isComplete ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating particles covering the whole page */}
      <div className="particles-container">
        {/* Initial particles that appear immediately */}
        {initialParticlesRef.current.map((particle, i) => (
          <motion.div 
            key={`initial-${i}`}
            className="particle"
            style={{ width: particle.size, height: particle.size }}
            initial={{ 
              x: particle.x1,
              y: particle.y1,
              opacity: 0
            }}
            animate={{ 
              x: particle.x2,
              y: particle.y2,
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: particle.duration,
              delay: 0
            }}
          />
        ))}
        
        {/* Main particles that appear gradually */}
        {particlesRef.current.map((particle, i) => (
          <motion.div 
            key={`main-${i}`}
            className="particle"
            style={{ width: particle.size, height: particle.size }}
            initial={{ 
              x: particle.x1,
              y: particle.y1,
              opacity: 0
            }}
            animate={{ 
              x: particle.x2,
              y: particle.y2,
              opacity: [0, 0.7, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse",
              duration: particle.duration,
              delay: particle.delay * (progress > 0 ? 0.5 : 1)
            }}
          />
        ))}
      </div>

      {/* Company name with enhanced 3D effect */}
      <motion.div 
        className="company-name-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="company-name">
          <h1 className="bhatiyani">Bhatiyani</h1>
          <p className="astute">Astute Intelligence</p>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="mt-16 w-80 relative z-10">
        <div className="h-1 w-full bg-secondary-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-600 to-primary-400"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-2 flex justify-between text-xs text-secondary-400">
          <span>Loading AI Models</span>
          <span>{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 