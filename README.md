# Órarend Tervező



> orarend info

> search by: tárgynév, tárgykód


## Routes

 - `GET / `
     - If the user has a timetable redirect to `/timetable` 
     - Else display landing page
 - `GET /search`
    - Params:
        - `filter`: Search term
        - `by`: Search by (Values: `any`, `name`, `code`)
 - `GET /timetable`:
    - Display saved timetable
    - If there is no timetable redirect to `/timetable/create`
 - `GET /timetable/create`:
    - Display the timetable creation page
 - `PUT /timetable`:
    - Save a new timetable
 - `GET /timetable/edit`:
    - Display the timetable edit page
 - Authentication Routes:
    - `GET /auth/login`: Show login page
    - `POST /auth/login`: Process login form
    - `POST /auth/logout`: Log the user out
    - `GET /auth/register`: Process registration form
    - `POST /auth/register`: Process registration form