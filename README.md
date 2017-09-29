# Java EE application migration

This example demonstrates the path to modernizing a Java EE application to a containerized infrastructure. We'll migrate the [Java EE 7 Hands-on Lab](https://github.com/javaee-samples/javaee7-hol) to Docker. Furthermore, we'll update the presentation layer written in Java Server Faces to a React application.

## Dockerizing the Movieplex7 applicaiton

The repository contains an application for browsing movies along with other related functions. Because we want to update the interface, we'll update the movie entity with extra attributes to make the presentation layer more descriptive. A Docker file builds the application and deploys it in Tomcat EE.

## Updating the presentation layer

The Movieplex7 application includes a REST interface which simplifies updating the presentation layer. We'll use the React javascript framework to build a client that lists the movies and provides more detail about a movie. The client is also compiled and deployed in Docker.

## Running the demo

To run the demo:

``` docker-compose up```

To run the demo in Play-with-Docker:

```
git clone https://github.com/dockersamples/javaee-demo.git

echo -n 'API_HOST=pwd' > env.env; echo -n `hostname -i` | sed 's/\./-/g'  >> env.env; echo -n '-8080.' >> env.env; echo $PWD_HOST_FQDN >> env.env

docker-compose up
```