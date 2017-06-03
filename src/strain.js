//reading file1
var fs = require('fs');

fs.readFile('Desktop/array of numbers.txt odd discard', 'utf8', function(err, data){
    var textByLine = text.split("\n")
    console.log(data);
});


//reading file2 
var fs = require('fs');

fs.readFile('Desktop/array of numbers2.txt even keep', 'utf8', function(err, data) {  
    var textByLine = text.split("\n")
    console.log(data);
});
