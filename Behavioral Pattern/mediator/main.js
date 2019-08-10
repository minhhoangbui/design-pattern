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

let mediator = (function () {
    let channels = {};
    
    let subscribe = function (channel, context, func) {
        if (!mediator.channels[channel]){
            mediator.channels[channel] = [];
        }
        mediator.channels[channel].push({
            context: context,
            func: func
        });
    };
    
    let publish = function (channel) {
        if (!mediator.channels[channel]){
            return false;
        }
        args = Array.prototype.slice.call(arguments, 1);

        for (let i = 0; i < mediator.channels[channel].length; i++){
            let sub = mediator.channels[channel][i];
            sub.func.apply(sub.context, args)
        }
    };
    return{
        channels: {},
        subscribe: subscribe,
        publish: publish
    }
}());

let task1 = new Task({name: 'Mediator Demo', user:'Hoang'});
let noti = new NotificationService();
let log = new LoggingService();
let audit = new AuditingService();

mediator.subscribe('complete', noti, noti.update);
mediator.subscribe('complete', log, log.update);
mediator.subscribe('complete', audit, audit.update);

task1.complete = function () {
    mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};
task1.complete();