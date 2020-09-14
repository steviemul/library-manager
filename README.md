# Quick Start

The application can be run in 2 ways :

* Simply, using the supplied script or using maven
* Using the supplied docker-compose file

## Simply

Assumes that maven and java are installed locally.

Run the bash script at the root of the repo :

```bash
./run.sh
```

Or run the maven command directly :

```
mvn clean spring-boot:run -f app/pom.xml
```

This will start the application up using an embedded h2 database running on port 8080 :

[http://localhost:8080](http://localhost:8080)

## Using docker-compose

Assumes docker and docker-compose are installed locally.

Execute the following, this will take longer than the method above.

```
docker-compose up
```

This will start up a MySql instance, the application, and a load balancer, available on port 80 :

[http://localhost](http://localhost)

# Application Info

Application is broadly broken up into 2 parts :

## Server Side

* All code located under **app/src/main/java**
* Using Java, SpringBoot and Spring JPA for persistance.
* The following APIs have been implemented :
  
  * GET /libraries (get all libraries)
  * GET /libraries?n=name (filter by name)
  * GET /libraries/{id} (get library by id)
  * POST /libraries (create new library)
  * PUT /libraries/{id} (update library by id)
  * DELETE /libraries{id} (delete library by id)

# Client Side

* Code located under **app/ui** and packaged into **app/src/main/resources/static** for serving to client
* Technologies used :

  * React for UI components
  * Redux for state management
  * material.css for styling and some responsiveness.
  * webpack to build

* Features implemented :

  * Ability to show the list of libraries
  * Ability to add a new library
  * Ability to view library details (click on the library name)
  * Ability to update a new library (click on the library name)
  * Ability to delete a library (click the X)
  * Ability to filter on name
  * Some basic responsiveness
  * Some validation of required fields

* Client side routes :

  * / (shows the library listing page)
  * /add (navigates to an empty library detail page to add a new library)
  * /detail/{id} (navigates to the library detail, to view or update)


  