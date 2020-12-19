const express = require("express");
const router = express.Router();
const {Account} = require("../models");
const {Analyst} = require("../models");
const {Client} = require("../models");
const {Developer} = require("../models");
const {Project_manager} = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
    try{
        const valid = await Account.findOne({
            where: {
                username: req.body.username,
            },
        });
        if(!valid) return res.status(400).send("Usuario no existente");
        if(valid.analyst){
            user = await Analyst.findOne({
                where: {
                    username: req.body.username,
                },
            });
            authtoken = "auth-token-A";
        }
        else if(valid.client){
            user = await Client.findOne({
                where: {
                    username: req.body.username,
                },
            });
            authtoken = "auth-token-C";
        }
        else if(valid.developer){
            user = await Developer.findOne({
                where: {
                    username: req.body.username,
                },
            });
            authtoken = "auth-token-D";
        }
        else if(valid.pm){
            user = await Project_manager.findOne({
                where: {
                    username: req.body.username,
                },
            });
            authtoken = "auth-token-JP";
        }
        const validpass = await bcrypt.compare(req.body.password, user.password);
        if(!validpass){
            return res.status(400).send("Clave incorrectas");
        }
        const token = jwt.sign({ id: valid.id }, process.env.SECRET_TOKEN);
        return res.header(authtoken, token).send(valid);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get("/getDev/:username", async (req,res) => {
    try {
        console.log(req.body.username);
        user = await Developer.findOne({
            where: {
                username: req.params.username,
            },
        });
        if(user.internal) return res.send("di");
        return res.send("de");
    } catch (error) {
        res.status(400).send(error);
    }
});


module.exports = router;