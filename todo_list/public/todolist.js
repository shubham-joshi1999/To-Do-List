$(function () {

    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')
    let element = $('#element')

    addtodoBtn.click(function () {
        let newTodo = newTodoBox.val()
        
        $.post(
            '/todos/',
            {task: newTodo},
            function (data) {
                todoList.empty();
                for (todo of data) {
                    todoList.append("<li id = l>" +todo.task + "  " +  "<button class = btn btn-info id = deli> remove </button>" + "</li>")
                }
            }
        )
    })
    let del = $('#deli')  ;
    del.click(function()
    {
         l.remove() // I am trying this but this is not working
    })
})
