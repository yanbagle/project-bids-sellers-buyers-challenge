import {Seller} from '../models/Seller';

var exports = module.exports = {};

exports.getMockSellers = function () {
    let sellers = [];
    for (let i = 0; i < 10; i++) {
        sellers.push(new Seller('seller: ' + i, i));
    }

    return sellers;
}





