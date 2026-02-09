const input = document.getElementById("input_box");
const button = document.getElementById("btn");
const list = document.getElementById("task_list");

button.addEventListener("click", function(){

    if(input.value ==="")return;

    const li = document.createElement("li");
    
    const cb = document.createElement("input");
    cb.type ="checkbox";

    const text = document.createElement("span");
    text.textContent = input.value;

    const del = document.createElement("button");
    del.textContent="delete";

    cb.addEventListener("change", function(){

        text.classList.toggle("done");


    });

    del.addEventListener("click", function(){



        list.removeChild(li);





    });

    li.appendChild(cb);
    li.appendChild(text);
    li.appendChild(del);
    list.appendChild(li);

    input.value = "";
});






