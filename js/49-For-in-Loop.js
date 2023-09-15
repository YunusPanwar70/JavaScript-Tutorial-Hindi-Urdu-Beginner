const a = {
  Fname: "Yunus",
  Lname: "Panwar",
  Age: 18,
};

console.log(a);

for (const key in a) {
  console.log(key + " " + a[key])
}
