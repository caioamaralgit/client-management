# Client Management App

This is an application to demontrate the use of an NodeJS API with a React application.

### Running project

First copy the `api/.env.example` file to `api/.env`:

```shell
cp api/.env.example api/.env
``` 

After that start the Docker Compose from the project root:

```shell
docker-compose -f docker/docker-compose.yml --env-file api/.env up
``` 

_\* Make sure that the ports 80 and 8000 are free. They will be used for the web client and the API._

Finally you can access the client using the link [http://localhost/](http://localhost/)

### Issues

Please note that there are a lot of improvements to do. You can check some of these at the [issues section](https://github.com/caioamaralgit/client-management/issues).