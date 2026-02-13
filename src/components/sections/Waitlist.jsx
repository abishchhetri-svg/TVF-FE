import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

const Waitlist = () => {
  const emailImageUrl = 'https://maas-log-prod.cn-wlcb.ufileos.com/anthropic/85cf93f4-b800-4272-a100-3670f12d053d/c1af99742d411b58cd244760e277947c.png?UCloudPublicKey=TOKEN_e15ba47a-d098-4fbd-9afc-a0dcf0e4e621&Expires=1770971886&Signature=ZH3NzjwF/6q/NDyu31vo4FZGwak=';

  return (
    <section id="waitlist" className="relative py-10 sm:py-12 px-4">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Main card */}
          <div className="bg-black rounded-3xl border border-gold-500/30 p-5 sm:p-6 md:p-8 lg:p-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex justify-center mb-4 sm:mb-5"
            >
              <span className="px-3 py-1 sm:px-4 sm:py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-semibold border border-gold-500/30 uppercase tracking-wide">
                Closed Beta Ongoing
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-center"
            >
              <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 bg-clip-text text-transparent">
                Join Our Waitlist
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 text-center max-w-2xl mx-auto px-2"
            >
              Be the first to know when we launch. Contact us to get early access and exclusive benefits.
            </motion.p>

            {/* Email Display */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <div className="flex items-center gap-2 sm:gap-3 px-5 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full bg-gray-900 border-2 border-gold-500/30 max-w-full sm:max-w-md overflow-hidden">
                <Mail className="text-gold-400 flex-shrink-0" size={18} />
                <img
                  src={emailImageUrl}
                  alt="Email"
                  className="h-5 sm:h-6 md:h-7 w-auto object-contain select-none"
                  draggable="false"
                />
              </div>
            </motion.div>

            {/* Additional info */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-4 sm:mt-6 text-gray-500 text-xs text-center"
            >
              Email us to join the waitlist
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Waitlist;
