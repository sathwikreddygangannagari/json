const URL ="http://localhost:3000/data"
let options = {
    "method" :"post",
    "headers" : {
        "content-type":"application/json"
},

"body":JSON.stringify(
    {
        "id" : "4",
        "name": "aravind",
        "age":25
    })
}

fetch(URL,options)
.then(res=>{
    if(res.ok){
        console.log(res.status,res.statusText)
    }
})
.catch(res=>console.log(res))