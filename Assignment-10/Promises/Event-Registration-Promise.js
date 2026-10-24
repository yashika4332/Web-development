
function registerStudent(name,seat){
    return new Promise((resolve,reject)=>{
      if(seat){
        resolve(name+"! The registration has been confirmed");
      }
      else{
        reject("No more seats Available");
      }
});

}
 
registerStudent("Yashika", true)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });

registerStudent("Aastha", false)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });