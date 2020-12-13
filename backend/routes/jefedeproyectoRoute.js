const express = require("express");
const router = express.Router();
const { Requirement } = require("../models");
const { Developer } = require("../models");

router.get("/requirement", async (req, res) => {
    try {
        const project = await Requirement.findAll();
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/requirement/setPrice", async (req, res) => {
    try {
        const requi = await Requirement.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!requi) return res.status(400).send("Requisito no existente");

        await requi.update({price: req.body.price, where:{id: req.body.id}});
        
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/requirement/setFinished", async (req, res) => {
    try {
        requi = await Requirement.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!requi) return res.status(400).send("Requisito no existente");

        await requi.update({
            finished: req.body.finished},{
                where: {
                    id: req.body.id,
                }
            })
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/requirement/setDev", async (req, res) => {
    try {
        requi = await Requirement.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!requi) return res.status(400).send("Requisito no existente");
        dev = Developer.findOne({
            where: {
                username: req.body.dev,
            }
        })
        if(!dev) return res.status(400).send("Developer no existente");

        await requi.update({
            developer: req.body.dev},{
                where: {
                    id: req.body.id,
                }
            })
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;