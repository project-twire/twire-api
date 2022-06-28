const fs = require('fs');

module.exports = (app, port) => {
    const paths = fs.readdirSync('routes');
    paths.forEach((path) => {
        const d = require('../routes/' + path);
        app[d.method.toLowerCase()](d.path, d.handle);
    });
    app.listen(port);
}