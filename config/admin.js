module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a46a32a659ff18b1004c2b353a95e557'),
  },
});
