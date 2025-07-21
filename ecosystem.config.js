module.exports = {
  apps: [
    {
      name: 'nextjs-app',
      script: 'npm',
      args: 'run start',
      instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};
