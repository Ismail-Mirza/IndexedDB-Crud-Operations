import Localbase from 'localbase';
//init database
const initDB = (dbName)=>new Localbase(dbName);
//create table 
const insertOne= (dbName,tableName,table) =>{
    dbName.collection(`${tableName}`).add(table)
}
//update table 
const updateOne = (dbName,tableName,where,newValue) =>{
    dbName.collection(`${tableName}`).doc(where).update(newValue);
}
//delete one row 
const deleteOne = (dbName,tableName,where)=>{
    dbName.collection(`${tableName}`).doc(where).delete()
}
//detete all
const deleteAll = (dbName,tableName) =>{
    dbName.collection(`${tableName}`).delete();
}
export default initDB;
export{
    insertOne,
    updateOne,
    deleteOne,
    deleteAll,
}