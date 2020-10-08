const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: `Welcome to ${process.env.COHORT}`,
		fact: process.env.FUN_FACT || 'Facts are not fun'
	})
})

module.exports = router
