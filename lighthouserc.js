module.exports = {
  ci: {
    collect: {
      url: [
        'https://gifted-villani-822fc2.netlify.app/'
      ]
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', {minScore: 1}],
        'categories:accessibility': ['error', {minScore: 1}]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};