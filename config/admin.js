module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5c764630c58332d14579fddb1d4aa76f'),
  },
});
