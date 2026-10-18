const studentProfile = {
  name : "Sara Ahmed",
  age : 19,
  department : "Software Engineering",
  address : {
    city : "Karachi",
    country : "Pakistan"
  }  
};
const {name, age ,department : program} = studentProfile;
const {address : {city, country},phone = "Not provided"} = studentProfile;
console.log(`${name} studies ${program} in ${city}. Phone: ${phone}`);



