# Órarend Tervező

A projekt célja, egy olyan webes alkalmazás fejlesztése, amelyben a felhasználó képes naptári nézetben látni az általa felvett órákat. A program jelzi az ütközéseket, és alternatívákat kínál az ütköző kurzusok helyett ugyanabból a tárgyból. A heti naptári nézetben láthatóak a kiválasztott kurzusok nevei, helyszínei, időpontjai. Az alkalmazásba a felhasználói fiókkal lehet bejelentkezni, és a program minden felhasználójának órarendjét tárolja.

A program az orarend információt a http://to.ttk.elte.hu/uj-tanrend oldalról gyűjti össze.

## Application Routes

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

# User Roles

- User - alapértelmezett
    - Jogosultságok:
        - bejelentkezés
        - kurzus felvétele
        - órarend nézése
- Admin
    - Jogosultságok:
        - bejelentkezés
        - felhasználók törlése
        - kurzusok törlése
- Developer (Useless User)
    - Jogosultságok:
        - `N/A`

# Use Case

![Use Case Diagram](uml/projekt-orarend.png)

# Table Structure / E-K Diagram

![E-K Diagram](uml/e-k%20projekt%20orarend.png)

## Users
| id | username | password_hash |

## Courses
| id | name | time | course_code |

## User_Course (pivot)
| user_id | course_id |

# Development

- Clone the repository `git clone git@github.com:rigor789/alkfejl-orarend-tervezo.git`
- Change into the cloned directory `cd alkfejl-orarend-tervezo`
- Run the project `./mvnw spring-boot:run`

# Project Structure

The project is using the default Spring-Boot directory structure.

```
alkfejl-orarend-tervezo/
  |-src                                           // The Java Source
  |  |-main                                       // The Application Source
  |  |  |-java                                    // The Java Source files
  |  |  |  |-hu.elte.alkfejl.orarend              // Main application Package
  |  |  |  |  |-api                               // API Controllers
  |  |  |  |  |-controller                        // MVC Controllers
  |  |  |  |  |-model                             // MVC Models
  |  |  |-resources                               // Other resources
  |  |  |  |-static                               // Static Assets
  |  |  |  |-templates                            // Thymleaf templates
  |  |-test                                       // Unit tests
  |-uml                                           // The source for the uml diagrams
  
  (yes this has been hand written c:)
```

# A Csapat

- [Gaál Péter](https://github.com/gpeter12)
- [Randjelovic Igor](https://github.com/rigor789)

