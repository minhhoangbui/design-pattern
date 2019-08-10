let Task = function (data) {
    this.name = data.name;
    this.priority = data.priority;
    this.project = data.project;
    this.user = data.user;
    this.completed = data.completed;
};

let TaskService = function () {
    return {
        complete: function (task) {
            task.completed = true;
            console.log('Completing task ' + task.name);
        },
        setCompleteDate: function (task) {
            task.completeDate = new Date();
            console.log(task.name + ' completed on ' + task.completeDate);
        },
        notifyCompletion: function (task, user) {
            console.log('Notyfing ' + user + ' of the completion of ' + task.name);
        },
        save: function (task) {
            console.log('Saving task: ' + task.name);
        }
    }
}();

let TaskServiceWrapper = function () {
    let completeAndNotify = function (task) {
        TaskService.complete(task);
        if (myTask.completed == true) {
            TaskService.setCompleteDate(task);
            TaskService.notifyCompletion(task, task.user);
            TaskService.save(task);
        }
    };
    return {
        completeAndNotify: completeAndNotify
    }
}();

let myTask = new Task({
    name: "myTask",
    priority: 1,
    project: 'Course',
    user: 'Hoang',
    completed: false
});

TaskServiceWrapper.completeAndNotify(myTask);

console.log(myTask);