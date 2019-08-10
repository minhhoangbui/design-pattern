let repo = function () {
    let db = {};

    let get = function (id) {
        console.log('Getting user ' + id);
        return {
            name: 'new user from db'
        }
    };

    function save(user) {
        console.log('Saving ' + user.name + ' to the database');
    }
    return {
        get: get,
        save: save
    }
};

module.exports = repo;