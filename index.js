const fs = require('fs');
const path = require('path');

const loadConfig = (filepath = 'config.json') => {
  try {
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
  } catch {
    return { port: 3000, env: 'development' };
  }
};

const config = loadConfig();
console.log('Config loaded:', config);

module.exports = { loadConfig };
