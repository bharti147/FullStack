import express from 'express'

const app = express();

const port = process.env.PORT || 3000;



app.get('/',(req,res)=>{
    res.send('server is ready')
})

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'1st joke',
            content:'this is 1st joke'
        },
        {
            id:2,
            title:'2nd joke',
            content:'this is 2nd joke'
        },
        {
            id:3,
            title:'3rd joke',
            content:'this is 3rd joke'
        },
        {
            id:4,
            title:'4th joke',
            content:'this is 4th joke'
        },
        {
            id:5,
            title:'5th joke',
            content:'this is 5th joke'
        }
    ]
    res.send(jokes);

})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})


