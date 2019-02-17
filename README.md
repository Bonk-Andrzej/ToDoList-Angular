# ToDoList 
Simple application for managing our tasks.
Made to learn the basics of Angular.
Project developed using Gitflow Workflow. 

#### Stack
* Angular 7, TypeScript, HTML, Scss
* FireBase for user authentication
* MLab noSQL database to store users tasks 

#### Features
- [x] Registration new user or logging in already existing
- [x] Unregistered user can't enter to task field or done field
- [x] Notification for registration and login errors
- [x] Validation for deleting task
- [x] Adding pipes for improve readability
- [x] Showing the date when the mouse hovers over task or task already done
- [x] Add button is disabled when text field is empty

#### Examples of some features
![login](img/toDoList-login.png)
![email error1](img/toDoList-error-emailAlreadyInUse.png)
![email error2](img/toDoList-error-emailBadlyFormatted.png)
![login unregistered user](img/toDoList-error-logUnregisterUser.png)
![register bad password](img/toDoList-error-toSmallPassword.png)
![password error](img/toDoList-error-wrongPassword.png)
![tasks list](img/toDoList-taskList.png)
![task date](img/toDoList-taskListDate.png)
![done tasks](img/toDoList-doneTasksList.png)
![task delete](img/toDoList-taskDeleteValidation.png)

#### Build and run Angular application (localhost:4200)

```sh
$ ng serve --open
```

