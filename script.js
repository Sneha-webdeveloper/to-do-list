
function addTask(){
    const task = document.getElementById("Result").value


    var parentDiv = document.getElementById('new');

    var newDiv = document.createElement('div');

    var del = document.createElement('button');
    var Update = document.createElement('button');
    var checkbox = document.createElement('button');


    newDiv.textContent = task;
    del.innerHTML = `<i class="fa-solid fa-trash" style="color: #0661fe;"></i>`;
    Update.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #0860f7;"></i>`;
 
    newDiv.style.marginTop = "20px"
    newDiv.style.border = "2px solid black"
    newDiv.style.backgroundColor="white"
    newDiv.style.padding="15px"
    newDiv.style.borderRadius="10px"
    newDiv.style.color="black"
    newDiv.style.fontSize="17px"
    newDiv.style.boxShadow = "5px 5px 5px gray"

    del.style.backgroundColor = "white"
    del.style.border = "none"
    del.style.width = "30px"
    del.style.marginLeft = "450px"
    del.style.position = "sticky"
    del.style.boxShadow = "-10px -15px 20px whitesmoke"


    Update.style.marginLeft = "30px"
    Update.style.width = "30px"
    Update.style.backgroundColor = "white"
    Update.style.position = "sticky"
    Update.style.border = "none"




    del.onclick = function() {

        newDiv.parentNode.removeChild(newDiv);
      };

    Update.onclick = function(){

        const prmp = prompt("Edit your task")
        newDiv.textContent = prmp
        
        newDiv.appendChild(del);
        newDiv.appendChild(Update);


    }  
      

    function clearr(){
        Result.value = " "
    }
    
 
    parentDiv.appendChild(newDiv);
    
    newDiv.appendChild(del);
    newDiv.appendChild(Update);
    clearr()
    



}