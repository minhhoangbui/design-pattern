let repo = function f() {
    let called = 0;

    let save = function (task) {
        called ++;
        console.log('Saving ' + task +
                    ' Called ' + called + ' times');
    }

    console.log('Renew task repo');
    return {
        save: save
    }
}

module.exports = new repo;