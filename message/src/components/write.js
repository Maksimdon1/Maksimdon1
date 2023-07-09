const fs = require('fs');

const writes =(data)=>{
fs.updatedJSON('./myFile.json', JSON.stringify(data), (err) => {
  if (err) console.log('Error writing file:', err);
})}