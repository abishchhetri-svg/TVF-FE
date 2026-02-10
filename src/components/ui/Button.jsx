import { motion } from 'framer-motion';

const Button = ({ children, primary = true, className = '', ...props }) => {
  const baseClasses = primary ? 'btn-primary' : 'btn-secondary';

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
