export const content = {
  navbar: {
    logo: 'The Venture Forge',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
    ],
  },

  hero: {
    tagline: 'AI-Powered Financial Innovation',
    title: 'Forging the Future of',
    highlight: 'AI-Powered Finance',
    subtitle: 'Transform your investment strategy with cutting-edge artificial intelligence and machine learning algorithms. Unlock insights that were once reserved for institutional investors.',
    ctas: [
      { text: 'Get Started', href: '#home', primary: true },
      { text: 'View Demo', href: '#services', primary: false },
    ],
  },

  about: {
    title: 'About Us',
    subtitle: 'Pioneering the next generation of financial technology',
    story: {
      title: 'Our Story',
      text: 'Founded with a vision to democratize institutional-grade AI, The Venture Forge is at the forefront of financial innovation. We combine deep expertise in artificial intelligence, machine learning, and quantitative finance to deliver solutions that transform how investors approach the market.',
    },
    mission: {
      title: 'Our Mission',
      text: 'To empower every investor with AI-driven insights and tools that were once exclusive to hedge funds and institutional traders. We believe in making sophisticated financial technology accessible to all.',
    },
  },

  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive AI-powered financial solutions',
    items: [
      {
        icon: 'Brain',
        title: 'AI-Driven Finance',
        description: 'Leveraging machine learning and advanced analytics, we develop intelligent financial solutions that adapt to market dynamics. Our proprietary algorithms analyze vast datasets to identify opportunities and mitigate risks in real-time.',
        features: ['Machine Learning', 'Real-time Analytics', 'Risk Mitigation'],
      },
      {
        icon: 'TrendingUp',
        title: 'Algorithmic Trading',
        description: 'Our sophisticated trading algorithms execute strategies with precision and speed, operating across multiple asset classes. Built on decades of financial expertise and modern technology, we deliver consistent performance in diverse market conditions.',
        features: ['Multi-asset Trading', 'Precision Execution', 'Consistent Performance'],
      },
    ],
  },

  footer: {
    company: {
      name: 'The Venture Forge',
      tagline: 'AI-Powered Financial Innovation',
    },
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
    ],
    social: [
      { name: 'Twitter', href: '#' },
      { name: 'Linkedin', href: '#' },
      { name: 'Github', href: '#' },
    ],
    copyright: `© ${new Date().getFullYear()} The Venture Forge. All rights reserved.`,
  },
};

export default content;
