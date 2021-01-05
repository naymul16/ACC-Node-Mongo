const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.getAll = async (req,res,next) =>{
    try {
        const getAll = {};
        const shop = await shopService.find(getAll);
        return res.status(200).json(shop);
    } catch (error) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.getById = async (req,res,next) =>{
    try {
        const shopId = req.params.id;
        console.log(shopId)
        const shop = await shopService.getById({'_id':`${shopId}`});
        return res.status(200).json(shop)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.updateById = async (req,res,next)=>{
    try {
        const id = req.params.id
        const update = req.body;
        const shop = await shopService.updateById(id,update);
        return res.status(200).json(shop);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.deleteById = async (req,res,next) =>{
    try {
        const id = req.params.id;
        const shop = await shopService.deleteById(id);
        return res.send(200).json(shop)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}