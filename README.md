To run the api locally:
1. npm install
2. npm start

The four endpoints

1. create new project
POST http://localhost:8080/api/project
{
  "name": "project name",
  "sellerId": "1",
  "desc": "desc",
  "maxBudget": 5000,
  "deadline": "2011-10-05T14:48:00.000Z",
  "id": "1"
}

2. get project by id
GET http://localhost:8080/api/project/:id

3. add a new bid to project
POST http://localhost:8080/api/bid
{
  "amount": 20,
  "buyerId": "123",
  "projectId": "1",
  "id": 111
}

4. get all open projects
GET http://localhost:8080/api/projects/open

The time the exercise took (after dev environment is set up): 3 hours

Exercise Difficulty: Easy, Moderate, Difficult, Very Difficult: Moderate

How did you feel about the exercise itself? (1 lowest, 10 highest—awesome way to assess coding ability): 8. Interesting little exercise simply because I haven't worked in Node in a while, and I missed it :)

How do you feel about coding an exercise as a step in the interview process? 6-7, depending on the exercise itself. This was a good balance between challenging and time consuming.

What would you change in the exercise and/or process? N/A