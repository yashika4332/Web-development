
let count=0;
for(let rollno = 1 ; rollno<=20 ;rollno++){
    if(rollno == 13){
        continue;
    }
    if(rollno == 18){
        break;
    }
    console.log("Calling roll number "+rollno);
    count++;
}
console.log("Total roll numbers called out : "+count);