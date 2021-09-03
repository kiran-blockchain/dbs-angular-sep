var myFirstDate = new Promise((resolve,reject)=>{

     var basAssManager="kiran";
     if(basAssManager=='kiran'){
         reject("you Don't care for me!!!!!!")
     }
     else{
         resolve("Life is important than job")
     }
});

myFirstDate.then(result=>{
    console.log(result)
}).catch(err=>{
    console.log(err);
});
console.log("How are you");