
let Task = require('./task');
let Repo = require('./taskRepository');

let task1 = new Task(Repo.get(1));
let task2 = new Task({name: 'Create a demo for modules'});
let task3 = new Task({name: 'Create a demo for singleton'});
let task4 = new Task({name: 'Create a demo for prototypes'});

task1.complete();

task2.save();

task3.save();

task4.save();