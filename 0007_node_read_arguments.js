const arguments = process.argv;

arguments.forEach(function (val, index) {
    console.log(index + ': ' + val);
});

console.log(arguments); /*
 ['/usr/bin/node', '/home/mani/git/javascript-tutorial/0007_node_read_arguments.js'] 
 */