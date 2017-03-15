Because of this extremely short time I have used the Angular-seed. I usually use the yeoman generator with a more dynamic assembling ot the project.
Here everything is static in inde.html while I prefer a Gulp script that complies and injects the dependencies into index.html

### Project structure

Data layer -> DataFactory.js
This factory contains everyting related the data that interacts with https://jsonplaceholder.typicode.com
Some methods make multiple calls in sequence and I have used a promise chain. I could have done more with error handling.


Presentation ->

    view1.html      Posts layout
    view1.js        Posts controller
    
    view2.html      Posts by user layout
    view2.js        Posts by user controller
    
    



### Install Dependencies

```
npm install
bower_install
```


* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

The livereload shoulr launch [http://127.0.0.1:8000/#!/posts] otherwise open this link manually


