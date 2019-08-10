let repo = function () {
    let db = {};

    let get = function (id) {
        console.log('Getting project ' + id);
        return {
            name: 'new project from db'
        }
    };

    function save(project) {
        console.log('Saving ' + project.name + ' to the database');
    }
    return {
        get: get,
        save: save
    }
};

module.exports = repo;