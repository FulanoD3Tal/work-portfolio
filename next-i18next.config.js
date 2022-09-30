module.exports = {
  i18n: {
    /**
     * remove this line to make your page automatic
     * redirect to the one with the language of the
     * client
     */
    defaultLocale: 'en',
    locales: ['en', 'es'],
    reloadOnPrerender: process.env.NODE_ENV === 'development',
  },
};
