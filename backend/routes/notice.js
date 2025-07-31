const express = require('express');

const router = express.Router();

const Notice = require('../models/Notice');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const ADMIN_USER = {
    id:'ekp123',
    passwordHash: '$2b$10$GNV5PyrP4GkAdv9Cix8eDuzCYaJQnAPinZ/yGfh.SnrBUXQ7qh0fq'
};

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

router.post('/',async(req,res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        jwt.verify(token,JWT_SECRET);
        const {title, message,postedBy} = req.body;
        const newNotice = new Notice ({
            title,
            message,
            postedBy
        });

        const savedNotice = await newNotice.save();
        res.status(201).json(savedNotice);
    } catch (err) {
        res.status(500).json({ message: 'Error creating notice', err });
    }
});

router.get('/',async (req,res)=>{
    try {
        const notices = await Notice.find().sort({date:-1});
        res.status(200).json(notices);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching notices', err });
    }

});

router.post('/admin/login',(req,res)=>{
    const { id, password } = req.body;

    if(id!== ADMIN_USER.id) {
        return res.status(401).json({ error: 'Invalid ID or password' });
    }

    const isValid = bcrypt.compareSync(password,ADMIN_USER.passwordHash);
    if(!isValid) {
        return res.status(401).json({ error: 'Invalid ID or password' });
    }

    const token = jwt.sign({ id: ADMIN_USER.id }, JWT_SECRET,{expiresIn: '1h'});
    res.json({ token });
})

router.delete('/:id',async(req,res)=>{
    const token = req.headers.authorization?.split(' ')[1];
    if(!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    try {
        jwt.verify(token, JWT_SECRET);
        const deletedNotice = await Notice.findByIdAndDelete(req.params.id);
        if(!deletedNotice) {
            return res.status(404).json({error :'Notice not found'});

        }
        res.json({message :'Notice deleted successfully'});

    } catch (err) {
        console.error('Error deleting notice:', err);
        res.status(500).json({error:'Server error while delelting'});
    }
});

module.exports = router;