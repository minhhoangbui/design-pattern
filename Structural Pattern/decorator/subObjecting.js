let Task = function (name) {
    this.name = name;
    this.completed = false;
};

Task.prototype.complete = function () {
    console.log('Completing task : ' + this.name);
    this.completed = true;
};

Task.prototype.save = function () {
    console.log('Saving Task: ' + this.name);
};

let myTask = new Task('Legacy Task');
myTask.complete();
myTask.save();

let UrgentTask = function (name, priority) {
    Task.call(this, name);
    this.priority = priority;
};

UrgentTask.prototype = Object.create(Task.prototype);
UrgentTask.prototype.notify = function () {
    console.log('Notifying important people');
};

UrgentTask.prototype.save = function () {
    this.notify();
    console.log('do special stuff before saving');
    Task.prototype.save.call(this);
};
let ut = new UrgentTask('This is urgent', 1);
ut.complete();
ut.save();
// console.log(ut);