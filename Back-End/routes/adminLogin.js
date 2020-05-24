const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => {
    const adminUser = new AdminUser({
        fullName: req.body.fullName,
        userName: req.body.userName,
        password: req.body.password,
        role: req.body.role,
        email: req.body.email,
        contactNo: req.body.contactNo
    })

    try{
        const newAdminUser = await adminUser.save()
        res.status(201).json(newAdminUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router;