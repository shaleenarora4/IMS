var express = require("express");
var router = express.Router();
const subcategorySchema = require("../schema/subcategorySchema");
const productSchema = require("../schema/productSchema");


router.post('/create', function (req, res) {
    try {
        const [parentCategory,product]=[req.body.category,req.body.product];
        if(!parentCategory){
            return res.json({msg:"Category name missing"})
        }
        else{
            subcategorySchema.findOne({name:parentCategory},function(error,result){
                if(error){
                    res.json({msg:'no such category exists'});
                }
                else{
                    productSchema.create({parentid:result._id,name:product}).then(()=>
                    res.json({msg:"addition success"})).catch((error)=>
                    res.status(400).json({error:error}))
                }
            })
        }
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

router.get('/list',function(req,res){
    try {
        productSchema.find({}).then((data)=>
        {res.json({products:data})}).catch((error)=>
        {res.status(500).json({error:error})});
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

router.put('/update',function(req,res){
    try {
        const {name,updatedName}=req.body;
        if(!name){
            return res.json({msg:'No product entered'});
        }
        else{
            productSchema.findOneAndUpdate({name:name},{name:updatedName}).then(()=> 
            res.json({msg:"updation success"})).catch(()=>
            res.json({msg:"No such product exists"}));
        }
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

router.delete('/delete',function(req,res){
    try {
        const {name}=req.body;
        if(!name){
            return res.json({msg:'No product entered'});
        }
        else{
            productSchema.findOneAndRemove({name:name}).then(()=> 
            res.json({msg:"deletion success"})).catch(()=>
            res.json({msg:"No such product exists"}));
        }
    } catch (error) {
        return res.status(500).json({error:error});
    }
})

module.exports = router;