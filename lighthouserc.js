module.exports = {
  ci: {
    collect: {
      isSinglePageApplication: true,
      url: ['/', '/about', '404']
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { "minScore": 1 }],
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 1 }]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  },
};
