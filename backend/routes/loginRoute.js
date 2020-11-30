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
            message = "Ingresaste con un rol de Analista";
        }
        else if(valid.client){
            user = await Client.findOne({
                where: {
                    username: req.body.username,
                },
            });
            authtoken = "auth-token-C";
            message = "Ingresaste con un rol de Cliente";
        }
        else if(valid.developer){
            user = await Developer.findOne({
                where: {
                    username: req.body.username,
                },
            });
            authtoken = "auth-token-D";
            message = "Ingresaste con un rol de Desarrollador";
        }
        else if(valid.pm){
            user = await Project_manager.findOne({
                where: {
                    username: req.body.username,
                },
            });
            authtoken = "auth-token-JP";
            message = "Ingresaste con un rol de Jefe de Proyecto";
        }
        const validpass = await bcrypt.compare(req.body.password, user.password);
        if(!validpass){
            return res.status(400).send("Clave incorrectas");
        }
        const token = jwt.sign({ id: valid.id }, process.env.SECRET_TOKEN);
        return res.header(authtoken, token).send(message);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;