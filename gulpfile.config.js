module.exports = function () {
    var temp = './.tmp/';
    var wiredep = require('wiredep');
    var bowerFiles = wiredep({devDependencies: true}).js;

    var paths = {
        client: './src/client',
        js: [
            './src/client/app/**/*.js',
            '!./src/client/app/**/*.spec.js'
        ],
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

    var plato = {
        title: 'Plato Inspections Report',
        js: './src/client/app/**/*.js',
        excludeFiles: /.*\.spec\.js/
    };

    var testLibraries = [
        'node_modules/mocha/mocha.js',
        'node_modules/chai/chai.js',
        'node_modules/mocha-clean/index.js',
        'node_modules/sinon-chai/lib/sinon-chai.js'
    ];

    var specHelpers = [
        './src/client/test-helpers/*.js'
    ];

    var specs = [
        './src/client/app/**/*.spec.js'
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
        defaultPort: '8001',
        server: './src/server',
        client: './src/client',
        source: './src',
        temp: temp,
        nodeServer: './src/server/bin/www',
        browserReloadDelay: 1000,
        report: './report/',
        css: temp + 'styles.css',
        templateCache: templateCache,
        optimized: optimized,
        root: './',
        jsOrder: jsOrder,
        plato: plato,
        specRunner: './src/client/specs.html',
        specRunnerFile: 'specs.html',
        testLibraries: testLibraries,
        specHelpers: specHelpers,
        specs: specs
    };

    config.getWiredepDefaultOptions = function () {
        var options = {
            bowerJson: config.bower.json,
            directory: config.bower.directory,
            fileTypes: config.bower.fileTypes
        };

        return options;
    };

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                bowerFiles,
                config.specHelpers,
                './src/client/app/**/*.module.js',
                './src/client/app/**/*.js',
                temp + config.templateCache.file
            ),
            exclude: [],
            coverage: {
                dir: config.report + 'coverage',
                reporters: [
                    // reporters not supporting the `file` property
                    {type: 'html', subdir: 'report-html'},
                    {type: 'lcov', subdir: 'report-lcov'},
                    {type: 'text-summary'} //, subdir: '.', file; 'text-summary.text}
                ]
            },
            preprocessors: {}
        };

        options.preprocessors['./src/client/app/**/!(*.spec)+(.js)'] = ['coverage'];

        return options;
    }

    config.karma = getKarmaOptions();

    return config;
};
