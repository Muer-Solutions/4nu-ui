function allowDrop(ev) {
    ev.preventDefault();
}
  
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
  
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// open modal

document.getElementById('button').addEventListener('click' , function () {
    document.querySelector('.bg-modal').style.display = 'flex';
})

document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none';
})