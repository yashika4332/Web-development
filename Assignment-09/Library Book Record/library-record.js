
const Samplerecord =["BK-104","Javascript for Beginners","Programming",1200];
const [Id,Book, ,Price]= Samplerecord;
const shortRecord = ["BK-105","Learning ES6" ];
const [shortid,shortbook,shortcategory="General"] = shortRecord ;
console.log(`Book ${Id}: ${Book} costs ${Price}`);
console.log(`Book ${shortid}: ${shortbook} ${shortcategory}`);


