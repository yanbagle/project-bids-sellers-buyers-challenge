var exports = module.exports = {};

exports.Customer = function (name, id) {
    this.name = name;
    this.id = id;
}

exports.Customer.prototype.doSoemthing = function () {
    console.log("sdfosdfsdf");
}