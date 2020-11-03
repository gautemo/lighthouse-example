module.exports = {
  ci: {
    collect: {
      isSinglePageApplication: true
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 1 }]
      }
    }
  },
};