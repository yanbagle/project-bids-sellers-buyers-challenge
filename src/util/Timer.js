var exports = module.exports = {};

exports.Timer = function () {}

exports.Timer.prototype.closeProjects = function (projects) {
    setInterval(() => {
        projects.forEach((project) => {
            if (project.open && new Date(project.deadline) < new Date()) {
                project.open = false;
                project.setWinningBidder();
            }
        });
    },1000);
}