const express = require("express");
const router = express.Router();
const {Account} = require("../models");
const {Analyst} = require("../models");
const {Client} = require("../models");
const {Developer} = require("../models");
const {Project_manager} = require("../models");
const bcrypt = require("bcrypt");
router.use(express.json());

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
        if(req.body.type=="Analista"){
            user = await Analyst.create({
                email: req.body.email,
                username: req.body.username,
                password: hashPass,
            });
            await Account.create({
                username: req.body.username,
                analyst: true,
                client: false,
                developer: false,
                pm: false,
            });
        }
        if(req.body.type=="Jefe de Proyecto"){
            user = await Project_manager.create({
                email: req.body.email,
                username: req.body.username,
                password: hashPass,
            });
            await Account.create({
                username: req.body.username,
                analyst: false,
                client: false,
                developer: false,
                pm: true,
            });
        }
        if(req.body.type=="Desarrollador Interno"){
            user = await Developer.create({
                email: req.body.email,
                username: req.body.username,
                password: hashPass,
                internal: true,
            });
            await Account.create({
                username: req.body.username,
                analyst: false,
                client: false,
                developer: true,
                pm: false,
            });
        }
        if(req.body.type=="Desarrollador Externo"){
            user = await Developer.create({
                email: req.body.email,
                username: req.body.username,
                password: hashPass,
                internal: false,
            });
            await Account.create({
                username: req.body.username,
                analyst: false,
                client: false,
                developer: true,
                pm: false,
            });
        }
        if(req.body.type=="Cliente"){
            user = await Client.create({
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
        }
        return res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }  
});

module.exports = router;