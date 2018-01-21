var exports = module.exports = {};

exports.Project = function (name, desc, maxBudget, deadline, sellerId, id) {
    this.name = name;
    this.desc = desc;
    this.maxBudget = maxBudget;
    this.deadline = deadline;
    this.id = id;
    this.sellerId = sellerId;
    this.bids = [];
    this.lowestBid = 0;
    this.open = true;
    this.winningBidder = null;
}

exports.Project.prototype.getLowestBid = function () {
    this.lowestBid = this.bids.reduce((a, b) => {
        if (a.amount < b.amount) {
            return a;
        } else {
            return b;
        }
    });

    return this.lowestBid;
}

exports.Project.prototype.setWinningBidder = function () {
    const lowestBid = this.getLowestBid();
    this.winningBidder = lowestBid.buyerId;
}
