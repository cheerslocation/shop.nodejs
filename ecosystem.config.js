module.exports = {
    apps: [
      {
        name: "Evershop",
        script: "npm",
        env: {
          NODE_ENV: "production",
        },
        args: "run start",
      },
    ],
  };