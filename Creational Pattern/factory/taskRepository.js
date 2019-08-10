let repo = function () {
    let db = {};

    let get = function (id) {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    };

    function save(task) {
        console.log('Saving Task: ' + task.name + ' to the database');
    }

    console.log('renew task repo');
    return {
        get: get,
        save: save
    }
};

module.exports = repo;