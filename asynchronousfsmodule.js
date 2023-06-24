const {readFile,writeFile}=require('fs');
readFile('./content/first.txt','utf-8',(err,result)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('in first')
    const first=result
    readFile('./content/second.txt','utf-8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        console.log('in second')
        const second=result
        writeFile('./content/asynchronous.txt',`this is in asynchronous: ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err)
            }
            console.log('successfully written')

        })
    })
})