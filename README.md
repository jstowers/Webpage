# Webpage
Personal Webpage Using React

###Saturday, February 18, 2017###

***Basic Outline***

1.  Create index.js

2.  Create index.html

3.  Load npm libraries as dependencies:

        a.  react
        b.  react-dom

4.  Load npm libraries as development dependencies:
    
        a.  babel
        b.  webpack
        c.  webpack-dev-server

5.  Create package.json

6.  Create webpack.config.js


***Installing and Running Webpack 2.2.1***

1. In your project directory, install webpack as a development dependency:

        $ npm install --save-dev webpack

2. Check out the different commands available:

        $ node_modules/.bin/webpack --help

3. Create and configure your webpack.config.js file.

4. In the package.json file, add this build command to the 'scripts' property:

        "scripts": {
            "build": "node_modules/.bin/webpack --config webpack.config.js"
        }

    This script will run webpack and build the bundle.js file needed for web deployment.

5. Fire in the Hole!
   When you're ready, run this command in the terminal to build your bundle.js file:

        $ npm run build

6.  Use an FTP client, like Cyberduck, to copy your files and deploy your
    website on your webhost's server.
