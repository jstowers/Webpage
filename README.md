# Webpage
Personal Webpage Using React

###Saturday, February 18, 2017###


1.  Create index.js

2.  Create index.html
3.  Load npm libraries as dependencies:
    a.  react
    b.  react-dom
4.  Load npm libraries as development dependencies:    
    c.  babel
    d.  web
5.  Create package.json
6.  Create webpack.config.js

***Installing and Running Webpack 2.2.1***

1. In your project directory, install webpack:
        $ npm install --save-dev webpack

2. Check out the different commands:
        $ ./node_modules/.bin/webpack --help

3. Create your webpack.config.js file.

4. In the package.json file, add this build command to the 'scripts' property:
        "scripts": {
            "build": "node_modules/.bin/webpack --config webpack.config.js"
        }

5. In the terminal, run the script:
        $ npm run build
        
