const express = require("express");
const router = express.Router();
const { Requirement } = require("../models");

router.get("/", async (req, res) => {
    try {
        const project = await Requirement.findAll();
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
            developer: req.body.dev,
            price: req.body.price,
            state: false,
            project: req.body.project,
        });
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/edit", (req, res) => {
    //se edita un requisitos
})

router.delete("/delete", (req, res) => {
    //se borra un requisitos
})

module.exports = router;