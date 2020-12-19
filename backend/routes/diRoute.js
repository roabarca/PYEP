const express = require("express");
const router = express.Router();
const {Requirement} = require("../models");

router.get("/requirement/:dev", async (req, res) => {
    try {
        const requi = await Requirement.findAll({
            where:{
                developer: req.params.dev,
            }
        });
        return res.send(requi);
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;
