import initDB,{
    deleteAll,
    deleteOne,
    insertOne,
    updateOne
} from './db.js';

//configuration of site indexeddb
const db = initDB("mysite.com");

//connect  browser dom
const userid = document.getElementById("userid");
const productName = document.getElementById("productName");
const seller = document.getElementById("seller");
const price = document.getElementById("price");

//_buttons
const btnCreate = document.getElementById("btn-create");
const btnDeleteAll = document.getElementById("btn-delete");
const btnUpdate = document.getElementById("btn-update");
const btnRead = document.getElementById("btn-read");

//tbody 
const tbody = document.querySelector("tbody");

//read data from database
function Read(){
         //read data from database
         db.collection("products").get().then(products=>{
            let html = ""; 
            products.forEach(product => {
            
             html +=   `
                <tr>
                    <th id="td-id" scope="row">${product.id}</th>
                    <td id="td-name" >${product.productName}</td>
                    <td id="td-seller">${product.seller}</td>
                    <td id="td-price">${product.price}</td>
                    <td onclick="editBtn(this)" ><i  class="fa fa-edit btnEdit"></i></td>
                    <td><i class="fa fa-trash btnDelete"></i></td>
                </tr>
             `
            })
            tbody.innerHTML = html;
         })
        setTimeout(()=>{
        const delBtnOnes= document.querySelectorAll(".btnDelete");
        delBtnOnes.forEach(delBtn=>{
            delBtn.addEventListener("click",e =>{
                const parent = e.target.parentElement.parentElement;
                const id = parseInt(parent.querySelector("#td-id").textContent.trim());
                //remove html element from dom
                parent.remove();
                //remove date from database
                deleteOne(db,"products",{id:id});
            });
        })
        },1500)
    }
//add delte event listerner


 const App = ()=> {
    //read old data from database
    Read();
    
    //insert value using create button
    btnCreate.onclick= (event) => {
        //insert data in table
        const tableContent = {
            id:new Date().valueOf(),
            productName:productName.value,
            seller:seller.value,
            price:price.value,
        }
        insertOne(db,"products",tableContent);
        //change input field to empty string
        productName.value = '';
        seller.value = '';
        price.value = '';
    }
    //update existing products
    btnUpdate.onclick = (event)=>{
        const id = parseInt(userid.value.trim());
        const tableContent = {
            productName: productName.value,
            seller:seller.value,
            price: price.value,
        }
        updateOne(db,"products",{id:id},tableContent);
    }
    //read  new data from database
    btnRead.addEventListener('click',Read);
    //delete a row from database
   //delete All
    btnDeleteAll.onclick = (e)=>{
         deleteAll(db,"products");
         Read();
     }
         
   


}
export default App;