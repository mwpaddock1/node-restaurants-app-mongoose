module.exports = () => {
    return {
        files: ['models.js', 'server.js', 'config.js'],
        tests: ['test/**/*.js'],
        testFramework: 'mocha',
        env: {type: 'node',
          runner: 'node'
    },
       workers: {
           initial: 1,
           regular: 1,
           restart: true
       }
    }
}