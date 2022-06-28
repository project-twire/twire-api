const PORT = 8080,
    app = require('express')();
    
require('./handler')(app, PORT);