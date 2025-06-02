import { Link } from 'react-router-dom';

const Placeholder = ({ title, description, linkText, linkUrl }) => {
  return (
    <div className="pt-32 pb-20 bg-white dark:bg-secondary-950">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6 dark:text-white">{title}</h1>
          <p className="text-lg text-secondary-600 dark:text-secondary-300 mb-8">
            {description}
          </p>
          {linkText && linkUrl && (
            <Link to={linkUrl} className="btn btn-primary">
              {linkText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Placeholder; 