function getStudentData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 1 || id > 3) {
        reject(new Error("Student " + id + " not found"));
      } else {
      resolve("student "+id);
      }
    }, 2000);
  });
}

async function loadStudents(){
    for(let id=1;id<=3;id++){

        console.log("Loading Student "+id+"...");

        try{
            const student = await getStudentData(id);
 // await pauses this async function until the Promise settles,
// but JavaScript can continue running other tasks.
            console.log("loaded student:"+student);
        }catch(error){
            console.log("Error:"+error.message);
        }

    }

}
loadStudents();