// Social Media URLs
export const SOCIAL_LINKS = {
  discord: process.env.REACT_APP_DISCORD_URL || 'https://discord.com',
  youtube: process.env.REACT_APP_YOUTUBE_URL || 'https://www.youtube.com',
  twitter: process.env.REACT_APP_TWITTER_URL || 'https://twitter.com',
  instagram: process.env.REACT_APP_INSTAGRAM_URL || 'https://www.instagram.com'
};

// App Information
export const APP_INFO = {
  name: process.env.REACT_APP_NAME || 'NFT Marketplace',
  version: process.env.REACT_APP_VERSION || '0.1.0',
  description: 'NFT marketplace UI created with Anima for Figma.'
};

// Validation Patterns
export const VALIDATION = {
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  passwordMinLength: 8
};

// Route Paths
export const ROUTES = {
  home: '/Home',
  marketplace: '/Marketplace',
  rankings: '/Rankings',
  account: '/Account',
  connect: '/Connect',
  artist: '/Artist',
  nftpage: '/Nftpage'
};
