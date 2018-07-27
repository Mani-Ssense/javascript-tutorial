//Solution 1:
let a = 8;
for (let i = 1; i <= a; i++) {
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
let s = '#';
for (let i = 1; i <= a; i++) {
    console.log(s);
    s += '#';
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
