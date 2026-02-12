import { motion } from 'framer-motion';
import content from '../../data/content';

const Footer = () => {
  const { company, links, copyright } = content.footer;

  return (
    <footer className="border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <img src="/logo.png" alt="The Venture Forge" className="h-10 sm:h-12" />
            <p className="text-gray-400 text-xs sm:text-sm">{company.tagline}</p>
          </motion.div>

          {/* Navigation links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-800 text-center"
        >
          <p className="text-gray-500 text-xs">{copyright}</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
