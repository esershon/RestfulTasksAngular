const controller = require('./controller')

module.exports = function(app){
    app.get('/tasks', controller.getalltasks);
    app.get('/tasks/:id', controller.gettask);
    app.post('/tasks', controller.create);
    app.put('/tasks/:id', controller.update);
    app.delete('/tasks/:id', controller.delete);
}