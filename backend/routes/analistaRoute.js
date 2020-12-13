const express = require("express");
const router = express.Router();
const {Account} = require("../models");
const {Client} = require("../models");
const {Project} = require("../models");
const bcrypt = require("bcrypt");
router.use(express.json());

router.use("/requirement", require("./requirementsRoute.js"));

router.post("/register/project", async (req,res) => {
    try {
        const project = await Project.create({
            name: req.body.name,
            description: req.body.description,
            project_manager: req.body.pm,
            client: req.body.client,
            finished: false,
        });
        return res.send(project);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.post("/register", async (req, res) => {
    try{
        const valid = await Account.findOne({
            where: {
                username: req.body.username,
            },
        });
        if(valid) return res.status(400).send("Usuario existente");
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(req.body.password, salt);
        const user = await Client.create({
            email: req.body.email,
            username: req.body.username,
            password: hashPass,
        });
        await Account.create({
            username: req.body.username,
            analyst: false,
            client: true,
            developer: false,
            pm: false,
        });
        return res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }  
});

module.exports = router;