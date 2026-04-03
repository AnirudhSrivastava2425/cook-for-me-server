const express = require('express');
const router = express.Router();
const { generateRecipe } = require('../controller/openAI');

router.post('/generate-recipe',async (req,res)=>{

    let inputText = req.body.message
    const newRecipe = await generateRecipe(inputText)
    res.json({
        status: 'success',
        recipe:newRecipe
    })
})

module.exports = router;