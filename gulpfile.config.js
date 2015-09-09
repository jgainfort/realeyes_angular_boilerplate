module.exports = function () {
    var temp = './.tmp/';

    var paths = {
        js: './src/client/app/**/*.js',
        less: './src/client/styles/styles.less',
        images: './src/client/images/**/*',
        fonts: './src/client/fonts/**/*',
        html: './src/client/**/*.html',
        htmlTemplates: './src/client/app/**/*.html',
        index: './src/client/index.html'
    };

    var buildPaths = {
        root: './build',
        js: './build/app',
        styles: './build/styles',
        fonts: './build/fonts',
        images: './build/images',
        libs: './build/libs'
    };

    var bower = {
        bowerJson: require('./bower.json'),
        directory: './src/client/libs',
        fileTypes: {
            html: {
                replace: {
                    js: '<script src="/src/client/{{filePath}}"></script>'
                }
            }
        }
    };

    var templateCache = {
        file: 'templates.js',
        options: {
            module: 'app',
            root: 'app/',
            standAlone: false
        }
    };

    var optimized = {
        app: 'app.js',
        lib: 'lib.js',
        level: 4
    };

    var jsOrder = [
        '**/app.module.js',
        '**/*.module.js',
        '**/*.js'
    ];

    var config = {
        allJs: [
            './src/**/*.js',
            './*.js',
            '!./src/client/libs/**/*.js'
        ],
        paths: paths,
        buildPaths: buildPaths,
        bower: bower,
        defaultPort: '3380',
        server: './src/server',
        client: './src/client',
        source: './src',
        temp: temp,
        nodeServer: './src/server/bin/www',
        browserReloadDelay: 1000,
        report: './report',
        css: temp + 'styles.css',
        templateCache: templateCache,
        optimized: optimized,
        root: './',
        jsOrder: jsOrder
    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            fileTypes: config.bower.fileTypes
        };

        return options;
    };

    return config;
};
