import { motion } from 'framer-motion';

const Button = ({ children, primary = true, className = '', href, onClick, ...props }) => {
  const baseClasses = primary ? 'btn-primary' : 'btn-secondary';

  // If href is provided, render as an anchor tag
  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`${baseClasses} ${className}`}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  // Otherwise render as a button
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
