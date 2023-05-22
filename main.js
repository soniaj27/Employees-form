let employees =[];
let counter=1;
function addEmployee(){
    
    const name = document.getElementById("name").value;
    const profession = document.getElementById("profession").value;
    const age = document.getElementById("age").value;
    const id = generateId();
    const user = {
        id: id,
        userName : name,
        userProfession : profession,
        userAge : age
    };
    employees.push(user);
    console.log(employees)
     displayEmployee();
}


function validateForm(){
    // document.getElementById("myForm").addEventListener("click", function(event){
    //     event.preventDefault()
    //   });
    const name = document.getElementById("name").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim()
    let isValid =true;
    

    if(name==="" || profession==="" || age==="")
    {
        document.getElementById("success-message").textContent = "";
        document.getElementById("error-message").textContent = "Error:Please make sure all the fields are filled before adding in an employee !"
        isValid = false;
       
    }
    else{
        document.getElementById("error-message").textContent = "";
       
        addEmployee();
        document.getElementById("success-message").textContent = "Success : Employee Added!";
        isValid = false;
    }
    return isValid;
}
function generateId(){

    return counter++;
}

function deleteEmployee(id){
    employees.splice(employees.findIndex(e=>e.id === id),1);
    employees.forEach((employee,index) => {
if(employee.id>id)
{
    employee.id=employee.id-1;
    counter--;
}
    });
    displayEmployee();
}

function displayEmployee(){
    const container = document.getElementById('user-container');
    container.innerHTML = "";
    for(let i=0;i<employees.length;i++){
        const employee = employees[i];
        const bigBox = document.createElement("div");
        bigBox.classList.add("bigemployee-box");
        const box = document.createElement("div");
        box.classList.add("employee-box");
     

        const id = document.createElement("span");
        id.setAttribute("id","myClass");
        id.textContent = employee.id;
       

        const name = document.createElement("span");
        name.setAttribute("id","myClass");
        name.textContent =`Name:${employee.userName}`;
       

        const profession = document.createElement("span");
        profession.setAttribute("id","myClass");
        profession.textContent =`Profession:${employee.userProfession}`;
       

        const age = document.createElement("span");
        age.setAttribute("id","myClass");
        age.textContent = `Age:${employee.userAge}`;

        box.appendChild(id);
        box.appendChild(name);
        box.appendChild(profession);
        box.appendChild(age);

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click",() => deleteEmployee(employee.id))
        const deleteBox = document.createElement("div");
        deleteBox.classList.add("del-box");

     
        deleteBox.appendChild(deleteButton);
        bigBox.appendChild(box);
        bigBox.appendChild(deleteBox);
        container.appendChild(bigBox);
        
    }
}