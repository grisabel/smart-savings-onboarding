/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  basePath: '/login',
  reactStrictMode: true,
  i18n
}
