let Task = require('./task');

let NotificationService = function(){
    let message = 'Notifying ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

let LoggingService = function(){
    let message = 'Logging ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

let AuditingService = function(){
    let message = 'Auditing ';
    this.update = function (task) {
        console.log(message + task.user + ' for task ' + task.name);
    }
};

function ObserverList(){
    this.observerList = [];
}
ObserverList.prototype.add = function (obj){
    return this.observerList.push(obj);
};
ObserverList.prototype.get =  function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.count = function(){
    return this.observerList.length;
};

ObserverList.prototype.remoteAt = function(index){
    this.observerList.splice(index, 1);
};

ObserverList.prototype.indexOf = function(object){
    let i = 0;
    while (i < this.count()){
        if (object === this.observerList[i]){
            return i;
        }
        i++;
    }
    return -1;
};

let ObservableTask = function(data) {
    Task.call(this, data);
    this.observers = new ObserverList();
};

ObservableTask.prototype.addObserver = function(observer){
    this.observers.add(observer);
};

ObservableTask.prototype.notify = function(context) {
    let observerCount = this.observers.count();
    for (let i=0; i < observerCount; i++){
        this.observers.get(i).update(context);
    }
};

ObservableTask.prototype.save = function(){
    this.notify(this);
    Task.prototype.save.call(this);
};

ObservableTask.prototype.removeObserver = function(observer){
    let idx = this.observers.indexOf(observer);
    this.observers.remoteAt(idx);
};

let task1 = new ObservableTask({name: 'Constructions Demo', user:'Sansa'});

let noti = new NotificationService();
let log = new LoggingService();
let audit = new AuditingService();

task1.addObserver(noti);
task1.addObserver(log);
task1.addObserver(audit);

task1.save();

task1.removeObserver(noti);

task1.save();