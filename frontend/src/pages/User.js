class User {
    constructor(password = "", firstName = "", lastName = "", username = "") {
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.score = 0;
        this.hours = 0;
    }
    // You can add methods if needed
    setScore(newScore) {
        this.score = newScore;
    }

    addHours(hoursToAdd) {
        this.hours += hoursToAdd;
    }
}

// Example of how to use the class
const newUser = new User("myPassword123", "John", "Doe", "johndoe");
console.log(newUser);

// Update the score and hours for the user
newUser.setScore(50);
newUser.addHours(5);
console.log(newUser);
