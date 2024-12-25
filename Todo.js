const inputBox = document.getElementById("input-box");
const listcontiner = document.getElementById("list-container");

function addtask()
{
    if (inputBox.value === ''){
        alert ("you must write inside a box");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontiner.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);

    }
    inputBox.value = '';
    savedata();
}

listcontiner.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked"); 
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); 
      savadata();
      // Use remove() instead of Remove()
    }
  }); 

  function savedata ()
  {
    localStorage.setItem("data", listcontiner.innerHTML);
  }

  function Showlist ()
  {
 listcontiner.innerHTML = localStorage.getItem("data");
  }

  Showlist ();
