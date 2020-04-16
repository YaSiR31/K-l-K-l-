function person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
}

const brad = new person('Brad', '15-09-2002') 
console.log(brad);