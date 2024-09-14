const express=require("express")
const cors=require("cors")
const PORT=5000
const app =express()

app.use(cors())
app.use(express.json())


//data array

data=[

]

//post ( add blog)

// let index=0;

app.post("/posts",async(req,res)=>{
   try {
    const { title , content}=req.body;
    console.log({title,content})
    data.push({title,content});

    return res.json({status:"ok",message:"Blog Added!!!"})
   } catch (error) {
      
     console.log(error)
     return res.json(error);
   }

    
})

// get all post

app.get('/posts', async(req,res)=>{
    try {
        res.status(200).json(data)
    } catch (error) {
        console.log(error)
       return res.json(error);
    }
})

app.listen(PORT, ()=>{
    console.log(`Server is Listening on port ${PORT}`)
})