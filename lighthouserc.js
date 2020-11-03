module.exports = {
  ci: {
    collect: {
      isSinglePageApplication: true
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { "minScore": 1 }],
        "categories:accessibility": ["error", { "minScore": 1 }]
      }
    },
    upload: {
      target: "temporary-public-storage"
    }
  },
};
