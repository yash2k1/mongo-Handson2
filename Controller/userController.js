const client =require("../db/connection")
const db=client.db("Human_Resource");
const collection=db.collection("employee");
//create
async function Q2ndAddNewUser(req,res){
   try{
  const data=await collection.insertMany([
    {
        "_id": {
            "$oid": "61cc5034af6ba4fcb54e8c38"
        },
        "firstName": "John",
        "lastName": "Doe",
        "salary": "25000",
        "department": "HR",
        "lastCompany": "X",
        "lastSalary": "10000",
        "overallExp": "2",
        "contactInfo": "1234567890",
        "yearGrad": "2016",
        "gradStream": "CSE"
    },
    {
        "_id": {
            "$oid": "61cc522daf6ba4fcb54e8c3a"
        },
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "_id": {
            "$oid": "61cc522daf6ba4fcb54e8c3b"
        },
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
    },
    {
        "_id": {
            "$oid": "61cc522daf6ba4fcb54e8c3c"
        },
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "_id": {
            "$oid": "61cc522daf6ba4fcb54e8c3d"
        },
        "firstName": "Jame",
        "lastName": "roh",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
    },
    {
        "_id": {
            "$oid": "61cc533baf6ba4fcb54e8c3e"
        },
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "_id": {
            "$oid": "61cc533baf6ba4fcb54e8c3f"
        },
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
    },
    {
        "_id": {
            "$oid": "61cc533baf6ba4fcb54e8c40"
        },
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "_id": {
            "$oid": "61cc533baf6ba4fcb54e8c41"
        },
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
    },
    {
        "_id": {
            "$oid": "61cc5515af6ba4fcb54e8c42"
        },
        "firstName": "Rohan",
        "lastName": "Jame",
        "salary": "30000",
        "department": "Technical",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "1",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "_id": {
            "$oid": "61cc5515af6ba4fcb54e8c43"
        },
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "20000",
        "overallExp": "1",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "ECE"
    },
    {
        "_id": {
            "$oid": "61cc5515af6ba4fcb54e8c44"
        },
        "firstName": "Sao",
        "lastName": "Avika",
        "salary": "30000",
        "department": "Sales",
        "lastCompany": "Y",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "1234567860",
        "yearGrad": "2015",
        "gradStream": "CSE"
    },
    {
        "_id": {
            "$oid": "61cc5515af6ba4fcb54e8c45"
        },
        "firstName": "Jame",
        "lastName": "Doe",
        "salary": "35000",
        "department": "Accounts",
        "lastCompany": "Z",
        "lastSalary": "15000",
        "overallExp": "2",
        "contactInfo": "123567890",
        "yearGrad": "2019",
        "gradStream": "EEE"
    }
]);
       console.log({msg:"inserted",userData:data});
       res.status(200).send("inserted");
     
 }
    catch(err){
        res.status(500).send("err"+err);
        
    }
}
//find
async function Q3ndAddNewUser(req,res){
   try{
  const result=await collection.find({"salary":{$gt:"3000"}})
  res.status(200).send({user:result});
    //    console.log(result);
     
 }
    catch(err){
        res.status(500).send("err"+err);
        
    }
}
//find
async function Q4ndAddNewUser(req,res){
   try{
  const result=await collection.find({"overallExp":{$gt:"2"}})
    //    console.log(result);
       res.status(200).send({user:result});
     
 }
    catch(err){
        res.status(500).send("err"+err);
        
    }
}
//find
async function Q5ndAddNewUser(req,res){
   try{
  const result=await collection.find({"yearGrad":{$gt:"2015"},"overallExp":{$gt:"1"}})
    //    console.log(result);
       res.status(200).send({user:result});
     
 }
    catch(err){
        res.status(500).send("err"+err);
        
    }
}
//update
async function Q6ndAddNewUser(req,res){
    try{
   const result=await collection.updateMany({"salary":{$gt:"60000"}},{$set:{"salary":"55000"}})
        console.log(result);
        res.status(200).send({user:result});
      
  }
     catch(err){
         res.status(500).send("err"+err);
         
     }
 }
//Delete
async function Q7ndAddNewUser(req,res){
    try{
   const result=await collection.deleteMany({"lastCompany":"Y"})
        console.log(result);
        res.status(200).send({user:result});
      
  }
     catch(err){
         res.status(500).send("err"+err);
         
     }
 }
module.exports={Q2ndAddNewUser,Q3ndAddNewUser,Q4ndAddNewUser,Q5ndAddNewUser,Q6ndAddNewUser,Q7ndAddNewUser};