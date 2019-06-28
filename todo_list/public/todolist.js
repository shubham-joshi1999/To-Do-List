
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
                    todoList.append("<li>" +todo.task+ "</li>")
                }
            }
        )
    })
    element.click(function(){
        element.remove() ;  // Here only task1 is deleted as i have assiged id element to it but if i add a new element then how will i delete it.
    })
})
