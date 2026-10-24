const ticket ={
1:{
    id:1,
    customerName :"Ayesha",
    status:"open",
} ,
2:{
    id:2,
    customerName:"John",
    status:"in progress",
},
3:{
    id:3,
    customerName:"Jay",
    status:"resolved",
},

};
function getTicketData(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!ticket[id]){
                reject(new Error("No such Tickets Exists"));
            }else{
                resolve(" Id: "+id+" ,Customer_Name: "+ticket[id].customerName+" ,Status: "+ticket[id].status);
            }
        },2000);
    });
}

async function checkTicket(id){
    
    console.log("Loading ticket "+id+" Data... ");

    try{
        const ticket = await getTicketData(id);
        console.log("Loaded Data:"+ticket);
    }
    catch(error){
        console.log("Error!"+error.message);

    }

}


async function checkAll(){
   await checkTicket(1);
await checkTicket(2);
await checkTicket(3);
await checkTicket(4);

}

checkAll();
