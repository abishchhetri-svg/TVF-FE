export const content = {
  navbar: {
    logo: 'The Venture Forge',
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Join Waitlist', href: '#waitlist' },
    ],
  },

  hero: {
    tagline: 'Redefining Financial Intelligence with AI',
    title: 'Forging the Future of',
    highlight: 'Next-Generation Finance',
    subtitle: 'Harness the power of artificial intelligence and machine learning to elevate your investment strategy. Unlock institutional-grade insights, automate decisions, and maximize returns like never before.',
    ctas: [
      { text: 'Join Waitlist', href: '#waitlist', primary: true },
      { text: 'Explore Our Demo', href: '#services', primary: false },
    ],
  },

  about: {
    title: 'About Us',
    subtitle: 'Revolutionizing Finance with AI & Innovation',
    story: {
      title: 'Our Story',
      text: 'The Venture Forge was born from a vision to democratize cutting-edge AI for every investor. We merge deep expertise in artificial intelligence, machine learning, and quantitative finance to deliver transformative solutions that empower smarter, faster investment decisions.',
    },
    mission: {
      title: 'Our Mission',
      text: 'We exist to give every investor the tools and insights once reserved for elite hedge funds. By combining advanced technology with market expertise, we make sophisticated financial strategies accessible, actionable, and profitable for all.',
    },
  },

  services: {
    title: 'Our Services',
    subtitle: 'AI-Powered Solutions for Smarter Investing',
    items: [
      {
        icon: 'Brain',
        title: 'Intelligent Financial Insights',
        description: 'Leverage machine learning to analyze vast datasets, identify hidden opportunities, and minimize risks in real-time. Our AI solutions adapt dynamically to market trends, giving you a decisive edge.',
        features: ['Predictive Analytics', 'Adaptive AI Models', 'Real-Time Risk Management'],
      },
      {
        icon: 'TrendingUp',
        title: 'Advanced Algorithmic Trading',
        description: 'Deploy precision-engineered trading algorithms across multiple asset classes. Built with decades of financial expertise and cutting-edge technology, our systems deliver consistent, high-performance results under any market conditions.',
        features: ['Multi-Asset Execution', 'High-Speed Precision', 'Optimized Performance'],
      },
      {
        icon: 'Cloud',
        title: 'Scalable SaaS Platforms',
        description: 'Access our cloud-native financial platforms anywhere, anytime. With enterprise-grade security, seamless scalability, and automated updates, deploy intelligent trading tools and analytics in just a few clicks.',
        features: ['Cloud-Native Architecture', 'Instant Scalability', '24/7 Availability', 'API-First Integration'],
      },
    ],
  },

  footer: {
    company: {
      name: 'The Venture Forge',
      tagline: 'Redefining Finance with AI',
    },
    links: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Join Waitlist', href: '#waitlist' },
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
