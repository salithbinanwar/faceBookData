const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const FbData = require('../Schemas/fbDataSchema')

// posting data
router.post('/', async(req, res)=>{
    const newFbData = new FbData(req.body);
    console.log(newFbData);
    await newFbData.save((err) => {
        if(err){
            console.log(err);
            res.status(500).json({
                error:'there was an error saving'
            })
        }else{
            console.log(newFbData);
            res.status(200).json({
                message:'data inserted successfully'
            })
        }
    })
})

// getData
router.get('/', async(req, res) => {
    try{
        const data = await FbData.find()
        res.status(200).json({
            data
        })
    }catch(err){
        console.log(err);
    }
})



module.exports = router;