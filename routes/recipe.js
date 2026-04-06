const express = require('express');
const router = express.Router();
const { generateRecipe } = require('../controller/openAI');

router.post('/generate-recipe',async (req,res)=>{
    let inputText = req.body.message
    const newRecipe = await generateRecipe(inputText)
    console.log({
        status: 'success',
        prompt:inputText,
        recipe:newRecipe
    })
    res.json({
        status: 'success',
        prompt:inputText,
        recipe:newRecipe
    })
})

module.exports = router;