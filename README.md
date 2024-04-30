# Polling-System-Api
This is a backend api for creating questions and adding options to a specific question. Options can be voted. Questions, options can be deleted and questions can be viewed with all of their options.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Polling system Features
1.Create questions
2.Add options to question
3.Delete a question
4.Delete an option
5.Add vote to an option
6.View a question with all of its options
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
| HTTP Verbs | Endpoints |  Action|
| ------------- | ------------- |
| GET  | /  | HOME PAGE | 
| POST  | /question/create-question  | TO CREATE A QUESTION IN API |
| DELETE  | /question/delete-question/:id  | TO DELETE A A QUESTION FROM API |
| POST  | /question/view-question/:id  | TO VIEW A QUESTION AND ITS OPTIONS |
| POST  | /option/create-option/:id  | TO CREATE A OPTION FOR APPROPRIATE  |
| DELETE  | /option/delete-option/:id  | TO DELETE A OPTION | 
| PUT  | option/add-Vote/:id  | TO ADD VOTE TO A QUESTION | 
___________________________________________________________________________________________________________________________________________________________________________________________
Tech Use
NodeJS
ExpressJS
MongoDB
Mongoose 
