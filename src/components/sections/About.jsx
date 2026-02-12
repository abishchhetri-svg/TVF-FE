import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Section, { SectionTitle } from '../ui/Section';
import content from '../../data/content';
import * as Icons from 'lucide-react';

const ServiceCard = ({ service, index }) => {
  const Icon = Icons[service.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass rounded-2xl p-6 sm:p-8 card-hover group"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 mb-4 sm:mb-6 group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-all duration-300">
        <Icon className="text-gold-400 group-hover:text-gold-300 transition-colors duration-300" size={24} sm:size={28} />
      </div>

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{service.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">{service.description}</p>

      {/* Features */}
      <ul className="space-y-1.5 sm:space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-400 text-xs sm:text-sm">
            <Check size={14} sm:size={16} className="text-gold-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const About = () => {
  const { title, subtitle, story, mission } = content.about;
  const { items } = content.services;

  return (
    <Section id="about" className="relative px-4">
      {/* Background decoration */}
      <div className="bg-orb bg-orb-2" style={{ top: '30%', right: '5%' }} />
      <div className="bg-orb bg-orb-1" style={{ top: '20%', left: '5%' }} />
      <div className="bg-orb bg-orb-3" style={{ bottom: '20%', right: '10%' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title={title} subtitle={subtitle} />

        {/* Story and Mission cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 sm:mb-16">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8 card-hover"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{story.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{story.text}</p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-6 sm:p-8 card-hover"
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">{mission.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{mission.text}</p>
          </motion.div>
        </div>

        {/* What We Offer Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3">
            What We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            AI-powered solutions designed to transform your investment strategy
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {items.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;
