class User {
  constructor({ firstName, lastName }) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  delete() {
    console.log("User removed!");
  }
}

const user = new User({
  firstName: "John",
  lastName: "Doe",
});

const user2 = new User({
  firstName: "Jane",
  lastName: "Doe",
});

console.log(user.delete === user2.delete);
