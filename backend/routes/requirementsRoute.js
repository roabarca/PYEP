const express = require("express");
const router = express.Router();
const { Requirement } = require("../models");

router.get("/", async (req, res) => {
    try {
        const project = await Requirement.findAll(/*{
            where: {
                project: req.params.project,
            }
        }*/);
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/add", async (req, res) => {
    try {
        const project = await Requirement.create({
            name: req.body.name,
            description: req.body.description,
            developer: req.body.developer,
            price: req.body.price,
            finished: false,
            project: req.body.project,
            
        });
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/edit/:id", async (req, res) => {
    try {
        requi = await Requirement.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!requi) return res.status(400).send("Requisito no existente");

        await requi.update({
            name: req.body.name,
            description: req.body.description,
            developer: req.body.developer,
            price: req.body.price,
            project: req.body.project,
                where: {
                    id: req.params.id,
                }
            })
        res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})


router.delete("/delete/:id", async (req, res) => {
    try {
        requi = await Requirement.findOne({
            where: {
                id: req.params.id,
            }
        })
        if(!requi) return res.status(400).send("Requisito no existente");

        await requi.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;