const express = require("express");
const router = express.Router();
const { Project } = require("../models");
const { Comment } = require("../models");
const { Requirement } = require("../models");

router.get("/project/all", async (req, res) => {
    try {
        const project = await Project.findAll();
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/project/:client", async (req, res) => {
    try {
        const project = await Project.findAll({
            where: {
                client: req.params.client,
            }
        });
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/project/comment", async (req, res) => {
    try {
        const message = await Comment.create({
            project: req.body.project,
            message: req.body.message,
            client: req.body.client,
        });
        return res.send(message);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/project/editProgress", async (req,res) => {
    try {
        requi = await Requirement.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!requi) return res.status(400).send("Requisito no existente");

        await requi.update({
            progress: req.body.progress},{
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
