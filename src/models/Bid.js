var exports = module.exports = {};

exports.Bid = function (amount, buyerId, projectId, id) {
    this.amount = amount;
    this.buyerId = buyerId;
    this.projectId = projectId;
    this.id = id;
}