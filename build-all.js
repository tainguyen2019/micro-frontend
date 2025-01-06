const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');

// Configuration
const config = {
  hostApp: {
    name: 'host-app',
    buildCommand: 'cd host-app && npm run build',
    buildDir: 'host-app/build/host-app',
    deployPath: '/host-app',
  },
  remoteAngular: {
    name: 'remote-angular',
    buildCommand: 'cd angular-remote-app && npm run build',
    buildDir: 'angular-remote-app/build/angular-app',
    deployPath: '/angular-app',
  },
  remoteReact: {
    name: 'remote-react',
    buildCommand: 'cd react-remote-app && npm run build',
    buildDir: 'react-remote-app/dist',
    deployPath: '/react-app',
  },
  tempDeployDir: 'docs',
};

// Function to execute shell commands
const runCommand = (command, cwd = process.cwd()) => {
  try {
    console.log(`Executing: ${command}`);
    execSync(command, { stdio: 'inherit', cwd });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    process.exit(1);
  }
};

// Function to build all applications
const buildApps = () => {
  console.log('Building Host App...');
  runCommand(config.hostApp.buildCommand);

  console.log('Building Remote Angular App...');
  runCommand(config.remoteAngular.buildCommand);

  console.log('Building Remote React App...');
  runCommand(config.remoteReact.buildCommand);
};

// Function to prepare deployment directory
const prepareDeployDir = async () => {
  console.log('Preparing deployment directory...');
  // Remove if exists
  await fs.remove(config.tempDeployDir);
  // Create fresh directory
  await fs.mkdir(config.tempDeployDir);

  // Copy Host App
  console.log('Copying Host App...');
  await fs.copy(
    config.hostApp.buildDir,
    path.join(config.tempDeployDir, config.hostApp.deployPath)
  );

  // Copy Remote Angular App
  console.log('Copying Remote Angular App...');
  await fs.copy(
    config.remoteAngular.buildDir,
    path.join(config.tempDeployDir, config.remoteAngular.deployPath)
  );

  // Copy Remote React App
  console.log('Copying Remote React App...');
  await fs.copy(
    config.remoteReact.buildDir,
    path.join(config.tempDeployDir, config.remoteReact.deployPath)
  );
};

// Main function
const main = async () => {
  buildApps();
  await prepareDeployDir();
};

main();
