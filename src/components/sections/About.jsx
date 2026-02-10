import { motion } from 'framer-motion';
import Section, { SectionTitle } from '../ui/Section';
import content from '../../data/content';

const About = () => {
  const { title, subtitle, story, mission } = content.about;

  return (
    <Section id="about" className="relative">
      {/* Background decoration */}
      <div className="bg-orb bg-orb-2" style={{ top: '30%', right: '5%' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle title={title} subtitle={subtitle} />

        {/* Story and Mission cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-100">{story.title}</h3>
            <p className="text-slate-400 leading-relaxed">{story.text}</p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8 card-hover"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-100">{mission.title}</h3>
            <p className="text-slate-400 leading-relaxed">{mission.text}</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;
