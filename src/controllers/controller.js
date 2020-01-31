
exports.index = function (req, res) {
    res.status(200).render('index')
};

exports.login = function (req, res) {
    res.status(200).render('login')
};

exports.signup = function (req, res) {
    res.status(200).render('signup')
};
