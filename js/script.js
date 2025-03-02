let taskAssiged = document.getElementById("taskAssiged").innerText;
let convertedTeskAss = Number(taskAssiged);

let addCount = document.getElementById("addCount").innerText;
let convertedAddCount = Number(addCount);
let listItem = document.getElementById("listItem");


// Routing
document.getElementById("question").addEventListener("click", function () {
    window.location.href = "./question.html"
})
function goHome() {
    window.location.href = "./index.html"
}



// Date format 
const date = new Date();
document.getElementById("date").innerText = date.toDateString();



// Card Button Function
function cardBtn(btn) {
    if (convertedTeskAss > 0 && !btn.disabled) {
        btn.disabled = true;
        convertedTeskAss--;
        convertedAddCount++
        document.getElementById("taskAssiged").innerText = convertedTeskAss;
        document.getElementById("addCount").innerText = convertedAddCount;
        const li = document.createElement("li");
        let cardHeader = btn.getAttribute("data-card-header");
        let cardDate = btn.getAttribute("data-card-date");
        li.innerText = "You have Complete The Task" + " " + cardHeader + " " + "At" + " " + cardDate;
        li.style.backgroundColor = "#f4f7ff"
        li.style.color = "#000000"
        li.style.padding = "20px"
        li.style.borderRadius = "10px"
        listItem.appendChild(li)
        alert("Board updated Successfully")
    }
    if (convertedTeskAss === 0) {
        alert("congrates!!! You have Completed all the current task")
    }
}


// Body bg color change 
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();
}


// Clear Button Function 
function clearCard() {
    document.getElementById("listItem").innerHTML = "";
}