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
      className="glass rounded-2xl p-8 card-hover group"
    >
      {/* Icon */}
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/20 mb-6 group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-all duration-300">
        <Icon className="text-gold-400 group-hover:text-gold-300 transition-colors duration-300" size={28} />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>

      {/* Description */}
      <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

      {/* Features */}
      <ul className="space-y-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center text-gray-400 text-sm">
            <Check size={16} className="text-gold-400 mr-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  const { title, subtitle, items } = content.services;

  return (
    <section id="services" className="section-padding relative">
      {/* Background decoration */}
      <div className="bg-orb bg-orb-1" style={{ top: '20%', left: '5%' }} />
      <div className="bg-orb bg-orb-3" style={{ bottom: '20%', right: '10%' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title={title} subtitle={subtitle} />

        {/* Services grid - 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {items.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
