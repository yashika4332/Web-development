const GroupA = ["Ali","Ahmed","Hamza"];
const copyA = [...GroupA];
const GroupB = ["Sara","Ayesha","Laiba"];
const Profile ={
    name: "Laiba",
    className: "Web Development",
    city: "Karachi"
};
const combine = [...GroupA,...GroupB];
copyA.push("Lubna");
console.log(combine);
console.log(GroupA);
console.log(copyA);

const updatedProfile= {...Profile ,  city : "Lahore"};
console.log(updatedProfile);
console.log(Profile);
const profileWithEmail = { ...Profile, email: "laiba@mail.com" };
console.log(profileWithEmail);
console.log(Profile);





