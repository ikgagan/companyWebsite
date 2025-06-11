import { useEffect } from 'react';
import Hero from '../components/home/Hero';
// import ProductsOverview from '../components/home/ProductsOverview';
import SolutionsOverview from '../components/home/SolutionsOverview';
import Testimonials from '../components/home/Testimonials';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <ProductsOverview /> */}
      <SolutionsOverview />
      <Testimonials />
    </div>
  );
};

export default Home; 