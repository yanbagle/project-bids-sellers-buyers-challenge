var exports = module.exports = {};

exports.Project = function (name, desc, maxBudget, deadline, sellerId, id) {
    this.name = name;
    this.desc = desc;
    this.maxBudget = maxBudget;
    this.deadline = deadline;
    this.id = id;
    this.sellerId = sellerId;
}