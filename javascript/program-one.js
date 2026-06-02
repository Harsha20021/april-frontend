let n = 4;
/*for (let i = 1; i <= n; i++) {
  let str = "* ";
  console.log(str.repeat(i));
}
for (let i = n - 1; i >= 1; i--) {
  let str = "M ";
  console.log(str.repeat(i));
}
for (let i = n - 1; i >= 1; i--) {
  let str = "* ";
  console.log(str);
}*/
for (let i = 1; i <= n; i++) {
  let str = "* ";
  let space = " ";
  //console.log(str.repeat(i));
  console.log(space.repeat(n - i) + str.repeat(i));
}
