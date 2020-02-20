module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: ['http://localhost:10010/'],
    },
    assert: {
      preset: 'lighthouse:no-pwa',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
