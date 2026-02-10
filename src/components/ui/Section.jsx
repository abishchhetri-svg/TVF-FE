import { motion } from 'framer-motion';

const Section = ({ id, children, className = '' }) => {
  return (
    <section
      id={id}
      className={`section-padding relative ${className}`}
    >
      {children}
    </section>
  );
};

export const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${alignClasses[align]}`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default Section;
