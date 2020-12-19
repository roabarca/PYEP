const express = require("express");
const router = express.Router();
const {Requirement} = require("../models");

router.get("/requirement/list/:dev", async (req, res) => {
    try {
        const requi = await Requirement.findAll({
            where:{
                developer: req.params.dev,
            }
        })
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/requirement/available", async (req, res) => {
    try {
        const requi = await Requirement.findAll({
            where:{
                developer: null,
            }
        })
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/requirement/delete/:id", async (req, res) => {
    try {
        const requi = await Requirement.findOne({
            where:{
                id: req.params.id,
                developer: req.body.developer,
            }
        })
        await requi.update({
            developer: null,
            price: null,
            where:{
                id: req.params.id
            }
        })
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/requirement/get/:id", async (req, res) => {
    try {
        const one = await Requirement.findOne({
            where: {
                developer: req.body.developer,
                finished:false
            }
        })
        if(one) return res.error(400).send("Posees un requisito activo");
        const requi = await Requirement.findOne({
            where:{
                id: req.params.id,
            }
        })
        await requi.update({
            developer: req.body.developer,
            price: req.body.price,
            where:{
                id: req.params.id
            }
        })
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;