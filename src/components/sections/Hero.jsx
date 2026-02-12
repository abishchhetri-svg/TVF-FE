import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Button from '../ui/Button';
import content from '../../data/content';

const Hero = () => {
  const cta = content.hero.ctas[0];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background gradient orbs */}
      <div className="bg-orb bg-orb-1" />
      <div className="bg-orb bg-orb-2" />
      <div className="bg-orb bg-orb-3" />

      {/* Content */}
      <div className="max-w-7xl mx-auto py-16 sm:py-20 relative z-10">
        <div className="text-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full glass text-xs sm:text-sm font-medium text-gold-400">
              {content.hero.tagline}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-white">{content.hero.title}</span>
            <br />
            <motion.span
              className="gradient-text animate-gradient bg-[length:200%_auto]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {content.hero.highlight}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            {content.hero.subtitle}
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center"
          >
            <Button primary href={cta.href}>
              {cta.text}
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-gray-400"
        >
          <span className="text-xs sm:text-sm mb-1 sm:mb-2">Scroll to explore</span>
          <ArrowDown size={16} sm:size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
