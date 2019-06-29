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
                    todoList.append('<li>' + todo.task + "  " + '<input type = "button" class = "delete" value="remove task"/></li>')
                }
            }
        )
        $(document).on('click','.delete',function()
        {
            $(this).parent().remove() ; 
        })
    })
})
