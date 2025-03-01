const date = new Date();
document.getElementById("date").innerText = date.toDateString();

let taskAssiged = document.getElementById("taskAssiged").innerText;
let convertedTeskAss = Number(taskAssiged);

let addCount = document.getElementById("addCount").innerText;
let convertedAddCount = Number(addCount);
let listItem = document.getElementById("listItem");





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
        li.innerText = cardHeader + cardDate;
        listItem.appendChild(li)
        alert("Just Ok")
    }
    if (convertedTeskAss === 0) {
        alert("All Ok")
    }

}


// Body bg color change 
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function changeBgColor() {
    document.body.style.backgroundColor = getRandomColor();
}




// Routing
document.getElementById("question").addEventListener("click", function () {
    window.location.href = "./question.html"
})