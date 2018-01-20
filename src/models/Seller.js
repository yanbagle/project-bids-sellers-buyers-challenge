import {Customer} from './Customer';

var exports = module.exports = {};

exports.Seller = function (name, id) {
    this.projects = [];
    Customer.call(this, name, id);
}

exports.Seller.prototype = Object.create( Customer.prototype );

exports.Seller.prototype.addProject = function (project) {
    this.projects.push(project);
}

exports.Seller.prototype.getProjects = function () {

}

exports.Seller.prototype.getSeller = function (id) {

}



