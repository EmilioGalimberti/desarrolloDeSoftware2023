const express = require('express')
const router = express.Router()
const {getArticuloById, createArticulo} = require('../controllers/articulos')

router.get("/articulos/:id", getArticuloById)
router.post("/articulos", createArticulo)

module.exports = router