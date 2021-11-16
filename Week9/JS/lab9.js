let actions;
window.onload = () => {
    actions = ["Plan the chapter", "Write the chapter", "Proofread the chapter"];
    dataRefresh();
}

let dataRefresh =() => {
    document.getElementById("list-of-tasks").innerHTML = "";
    document.getElementById('existingItems').innerHTML = "";
    for(let i = 0; i < actions.length; i++){
        document.getElementById("list-of-tasks").innerHTML += '<li>'+actions[i]+'</li>';
        document.getElementById('existingItems').innerHTML += '<option value="'+actions[i]+'">'+actions[i]+'</option>';
    }
}
let addTask = () => {
    actions.push(document.getElementById('action-item').value);
    dataRefresh();
}

let deleteTask = () => {
    actions.splice(actions.indexOf(document.getElementById('existingItems').value), 1);
    dataRefresh();
}