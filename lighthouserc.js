module.exports = {
  ci: {
    collect: {
      staticDistDir: 'dist',
      isSinglePageApplication: true,
      url: ['', 'about', '404']
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 1 }],
        "meta-description": "off",
        "robots-txt": "off",
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  },
};
