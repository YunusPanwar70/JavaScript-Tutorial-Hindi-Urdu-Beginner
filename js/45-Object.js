let a = {
  fname: "Yunus",
  lname: "Panwar",
  age: 18,
  country: "India",
  favMovies: ["Dhoom", "Sholay", "Dangal"],
  living: {
    city: "Jodhpur",
    state: "Rajsthan",
  },
  salary: function () {
    return 25000;
  },
  fullname: function () {
    return this.fname + " " + this.lname;
  },
};

console.log(a);

console.log(a.age);

console.log(a.favMovies[2]);

console.log(a.salary);

document.write(a.fullname());

console.log(a.living.city);
