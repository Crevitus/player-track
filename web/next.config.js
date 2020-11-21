const path = require('path')

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = {
    webpackDevMiddleware: config => {
        config.watchOptions = {
            poll: 1000,
            aggregateTimeout: 300,
        }
        return config
    },
}
