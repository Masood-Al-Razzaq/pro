console.log("hello")
settimeout(()=>{
    console.log("inside settimeout")
},0)
let a=[1,2,3,4,5]
let p=new Promise((resolve,reject)=>{
    if(a.includes(2)){
        resolve("problem resolve")
    }
    else{
        reject("rejected")
    }
})

p.then((data)=>{
    console.log(data)
}).catch((data1)=>{
    console.log(data1)
})
    