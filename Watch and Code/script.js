//var todos = ['item1', 'item2', 'item3', 'item4'];


var todoList =

    {


        todos: [],



        addToDo: function (todoText) {


            this.todos.push({

                todoText: todoText,
                completed: false,

            });



        },


        changeToDo: function (position, todoText) {


            this.todos[position].todoText = todoText;



        },


        deleteToDo: function (position) {


            this.todos.splice(position, 1);



        },


        toggleCompleted: function (position) {


            var todo = this.todos[position];
            todo.completed = !todo.completed;






        },

        toggleAll: function () {

            var totalTodos = this.todos.length;

            var completedTodos = 0;


            this.todos.forEach(function (todo) {

                if (todo.completed === true) {

                    completedTodos++;

                }





            });



            // for (var i = 0; i < totalTodos; i++) {

            //if (this.todos[i].completed === true) {

            // completedTodos++;

            // } }









            if (completedTodos === totalTodos)

            {

                this.todos.forEach(function (todo) {

                        todo.completed = false;

                        });


                }
            
                else {


                    this.todos.forEach(function(todo){
                        
                        
                            todo.completed = true;
                        
                        
                        
                    })
                    
                    
                   // for (var i = 0; i < totalTodos; i++) {

                        //this.todos[i].completed = true;}
                    




                }



            },

        };




        /*

        var displayTodosButton = document.getElementById('displaytodosbtn');



        displayTodosButton.addEventListener('click', function () {



            todoList.displayTodos();


        });



        var toggleAllButton = document.getElementById('toggleallbtn');


        toggleAllButton.addEventListener('click', function () {



            todoList.toggleAll();


        });

        */

        var handlers = {




            addToDo: function () {


                var addtodoinput = document.getElementById('addtodoinput');

                todoList.addToDo(addtodoinput.value);

                addtodoinput.value = '';

                view.displayTodos();
            },



            changeToDo: function () {


                var changetodoposition = document.getElementById('changetodoposition');
                var changetodotext = document.getElementById('changetodotext');

                todoList.changeToDo(changetodoposition.valueAsNumber, changetodotext.value);

                changetodoposition.value = '';
                changetodotext.value = '';
                view.displayTodos();




            },

            deleteToDo: function (position) {



                todoList.deleteToDo(position);
                view.displayTodos();
            },




            toggleCompleted: function () {


                var togglecompleted = document.getElementById('togglecompleted');

                todoList.toggleCompleted(togglecompleted.valueAsNumber);

                togglecompleted.value = '';
                view.displayTodos();

            },


            toggleAll: function () {


                todoList.toggleAll();
                view.displayTodos();

            },









        }



        var view = {


            displayTodos: function () {

                var todosUl = document.querySelector('ul');
                todosUl.innerHTML = '';

                for (var i = 0; i < todoList.todos.length; i++)

                {


                    var todosLi = document.createElement('li');
                    var todo = todoList.todos[i];


                    var todotextwithcompletion = '';


                    if (todo.completed === true) {

                        todotextwithcompletion = '(x) ' + todo.todoText;




                    } else {


                        todotextwithcompletion = '( ) ' + todo.todoText;


                    }

                    todosLi.id = i;
                    todosLi.textContent = todotextwithcompletion;

                    todosLi.appendChild(this.createDelete());

                    todosUl.appendChild(todosLi);

                }


            },

            createDelete: function () {

                var deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.className = 'deleteButton';

                return deleteButton;



            },

            setUpEvenListeners: function () {


                var todosUl = document.querySelector('ul');

                todosUl.addEventListener('click', function (event) {


                    console.log(event.target.parentNode.id);

                    var elementCLicked = event.target;

                    if (elementCLicked.className = 'deleteButton')

                    {

                        handlers.deleteToDo(parseInt(elementCLicked.parentNode.id));

                    }

                })

            },


        };

        view.setUpEvenListeners();
