const jwt = require("jsonwebtoken");

function verifyCliente(req, res, nxt){
    const token = req.header("auth-token-C");
    if(!token) return res.status(401).send("No tienes autorizado a entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = payload;
        nxt();
    } catch (error) {
        return res.status(401).send("No tienes autorizado a entrar");
    }
}

function verifyAnalista(req, res, nxt){
    const token = req.header("auth-token-A");
    if(!token) return res.status(401).send("No tienes autorizado a entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = payload;
        nxt();
    } catch (error) {
        return res.status(401).send("No tienes autorizado a entrar");
    }
}

function verifyJP(req, res, nxt){
    const token = req.header("auth-token-JP");
    if(!token) return res.status(401).send("No tienes autorizado a entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = payload;
        nxt();
    } catch (error) {
        return res.status(401).send("No tienes autorizado a entrar");
    }
}

function verifyDI(req, res, nxt){
    const token = req.header("auth-token-DI");
    if(!token) return res.status(401).send("No tienes autorizado a entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = payload;
        nxt();
    } catch (error) {
        return res.status(401).send("No tienes autorizado a entrar");
    }
}

function verifyDE(req, res, nxt){
    const token = req.header("auth-token-DE");
    if(!token) return res.status(401).send("No tienes autorizado a entrar");
    try {
        const payload = jwt.verify(token, process.env.SECRET_TOKEN);
        req.user = payload;
        nxt();
    } catch (error) {
        return res.status(401).send("No tienes autorizado a entrar");
    }
}

module.exports.C = verifyCliente;
module.exports.A = verifyAnalista;
module.exports.JP = verifyJP;
module.exports.DI = verifyDI;
module.exports.DE = verifyDE;