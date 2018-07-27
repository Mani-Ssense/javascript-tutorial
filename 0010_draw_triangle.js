//Solution 1:
for (let i = 1; i <= 8; i++) {
    console.log('#'.repeat(i));
}
/*
#
##
###
####
#####
######
#######
########
*/

//Solution 2:
let s = '';
for (let i = 0; i < 8; i++) {
    s += '#';
    console.log(s);
}
/*
#
##
###
####
#####
######
#######
########
*/

//Solution 3:
for (let line = "#"; line.length <= 8; line += "#") {
    console.log(line);
}
