import { useEffect } from 'react';
import SolutionsHero from '../components/solutions/SolutionsHero';
import CoreServices from '../components/solutions/CoreServices';
import Benefits from '../components/solutions/Benefits';
import Industries from '../components/solutions/Industries';

const Solutions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <SolutionsHero />
      <CoreServices />
      <Benefits />
      <Industries />
    </div>
  );
};

export default Solutions; 