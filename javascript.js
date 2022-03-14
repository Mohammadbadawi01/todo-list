function add() {
    let task = document.getElementById('new_task').value;
    if (task) {
        var x = "document.getElementById(this.id).remove();";
        document.getElementById('my_tasks').innerHTML += '<li  class="task" id="' + task + '">' + task + '<div id=' + task + ' onclick="' + x + '" class="drop">&times;</div></li>';
    }
    document.getElementById('new_task').value = '';
}

function clears() {
    document.getElementById('my_tasks').innerHTML = '';
}

function filterFun() {

    var input, filter, ul, li, i, txtValue;
    input = document.getElementById("filter_inp");
    filter = input.value.toUpperCase();
    ul = document.getElementById("my_tasks");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}