var express = require("express");
var router = express.Router();
const categorySchema = require("../schema/categorySchema");

router.post('/create', function (req, res) {
    try {
        if(!req.body.name){
            return res.json({msg:"Category name missing"})
        }
        else{
            categorySchema.create({name:req.body.name}).then(()=>
            {res.json({msg:"success"})}).catch(()=>
                res.json({msg:'Category already exists'})); 
        }
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

router.get('/list',function(req,res){
    try {
        categorySchema.find({}).then((data)=>
        {res.json({categories:data})}).catch((error)=>
        {res.status(500).json({error:error})});
    } catch (error) {
        return res.status(500).json({error:error});
    }
})


router.put('/update',function(req,res){
    try {
        const {name,updatedName}=req.body;
        if(!name){
            return res.json({msg:'No category entered'});
        }
        else{
            categorySchema.findOneAndUpdate({name:name},{name:updatedName}).then(()=> 
            res.json({msg:"updation success"})).catch(()=>
            res.json({msg:"No such category exists"}));
        }
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

router.delete('/delete',function(req,res){
    try {
        const {name}=req.body;
        if(!name){
            return res.json({msg:'No category entered'});
        }
        else{
            categorySchema.findOneAndDelete({name:name}).then(()=> 
            res.json({msg:"deletion success"})).catch(()=>
            res.json({msg:"No such category exists"}));
        }
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

module.exports = router;
