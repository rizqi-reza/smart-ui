const { exec } = require('child_process');
const fs = require('fs');

const componentFolder = './src/components';

const components = fs.readdirSync(componentFolder).filter((file) => {
  return !file.includes('.');
});

components.forEach((component) => {
  const componentName = component.replace('.vue', '');
  const buildCommand = `COMPONENT_NAME=${componentName} vite build -c vite.config-umd.ts`;
  console.log(buildCommand);
  exec(buildCommand);
});
