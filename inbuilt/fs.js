let fs = require('fs')

fs.writeFile('Mycode.txt','My code for Node js', (err) =>{
    if(err) throw err;
    console.log('One File Created')
});

fs.appendFile('MyText.txt','My code was added.', (err) =>{
    if(err) throw err;
    console.log('The File was Created')
});
