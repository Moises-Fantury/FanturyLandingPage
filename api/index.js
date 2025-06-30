// This file serves as the entry point for Vercel's serverless function
// It imports the Angular SSR server and handles requests

// Import required modules
const path = require('path');

const serverDistPath = path.join(process.cwd(), 'dist/fantury-landing-page/server/server.mjs');

export default import(serverDistPath).then(module => module.app);