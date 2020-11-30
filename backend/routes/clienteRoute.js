const express = require("express");
const router = express.Router();
const { Project } = require("../models");
const { Comment } = require("../models");

router.get("/project", async (req, res) => {
    try {
        const project = await Project.findAll();
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/project/comment", async (req, res) => {
    try {
        console.log(value);
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


module.exports = router;
