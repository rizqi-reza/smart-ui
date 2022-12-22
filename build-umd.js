import { exec } from 'child_process';
import { readdirSync } from 'fs';

const componentFolder = './src/components';

const components = readdirSync(componentFolder).filter((file) => {
  return !file.includes('.');
});

components.forEach((component) => {
  const componentName = component.replace('.vue', '');
  const buildCommand = `COMPONENT_NAME=${componentName} vite build -c vite.config-umd.ts`;
  console.log(buildCommand);
  exec(buildCommand, (err) => console.log(err));
});
