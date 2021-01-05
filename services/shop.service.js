const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.find = allShop =>{
    return Shop.find(allShop);
}

module.exports.getById = id =>{
    return Shop.findOne(id)
}

module.exports.updateById = (id,update) =>{
    return Shop.findByIdAndUpdate(id,update)
}

module.exports.deleteById = (id) =>{
    return Shop.findByIdAndDelete(id);
}