let taskHandler = require('./taskHandler');
let myrepo = require('./Repo');


myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');

taskHandler.save();
taskHandler.save();
taskHandler.save();
taskHandler.save();