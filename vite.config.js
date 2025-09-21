import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

function loadKeyOrEnv(filePath, envVarName) {
  const resolvedPath = path.resolve(filePath);

  if (fs.existsSync(resolvedPath)) {
    return fs.readFileSync(resolvedPath);
  } else if (process.env[envVarName]) {
    return Buffer.from(process.env[envVarName], 'base64');
  } else {
    console.warn(`Warning: ${filePath} not found and ${envVarName} env var not set.`);
    return null;
  }
}

const key = loadKeyOrEnv('./src/key.pem', 'KEY_PEM');
const cert = loadKeyOrEnv('./src/cert.pem', 'CERT_PEM');

export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    https: key && cert ? { key, cert } : false,
    port: 3000,
  },
});
