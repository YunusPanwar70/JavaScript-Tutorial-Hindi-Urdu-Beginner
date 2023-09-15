const a = {
  Fname: "Yunus",
  Lname: "Panwar",
  Age: 18,
  FavMovie: ["Jawan", "Leo", "K.G.F"],

  Living: {
    Contry: "India",
    State: "Rajasthan",
    City: "Jodhpur",
  },

  Salary: function (arr) {
    return 25000;
  },

  Check: function (arr1) {
    return this.Fname + " " + this.Lname;
  },
};

console.log(a);
console.log(a.Check());
console.log(a.Age);
console.log(a.Salary());
