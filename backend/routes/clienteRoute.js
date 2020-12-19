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

router.get("/project/comment/:client", async (req, res) => {
    try {
        console.log(req.params.client);
        const message = await Comment.findAll({
            where: {
                client: req.params.client,
            }
        });
        return res.send(message);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.delete("/project/comment/delete/:id", async (req, res) => {
    try {
        message = await Comment.findOne({
            where: {
                id: req.params.id,
            }
        })
        if(!message) return res.status(400).send("message no existente");

        await message.destroy({
            where: {
                id: req.params.id,
            }
        })
        res.send(message);
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
        
        
        project = await Project.findOne({
            where: {
                id: req.body.id,
            }
        })
        if(!project) return res.status(400).send("Requisito no existente");
        
        await project.update({
            progress: req.body.progress},{
                where: {
                    id: req.body.id,
                }
            })
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;
