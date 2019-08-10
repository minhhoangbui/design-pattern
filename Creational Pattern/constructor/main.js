
let Task = require('./class');
// import {Task} from "./class.js";

let task1 = new Task('Create a demo for constructor');
let task2 = new Task('Create a demo for modules');
let task3 = new Task('Create a demo for singleton');
let task4 = new Task('Create a demo for prototypes');

task1.complete();

task2.save();

task3.save();

task4.save();