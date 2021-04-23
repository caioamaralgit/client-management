# Client Management App

This is an application to demontrate the use of an NodeJS API with a React application.

### Running project

First copy the `api/src/.env.example` file to `api/src/.env`:

```shell
cp api/src/.env.example api/src/.env
``` 

After that, download the NPM packages and start the Docker Compose from the project root:

```shell
export DOWNLOAD_NPM="cd api && yarn && cd ../web && yarn"

# If you have Yarn installed
sh -c $DOWNLOAD_NPM

# Alternatively you can use Docker
docker run -it -v $(pwd):/app -w /app --rm node sh -c $DOWNLOAD_NPM

# If --env-file is available:
docker-compose -f docker/docker-compose.yml --env-file api/src/.env up

# Otherwise
docker-compose -f docker/docker-compose.yml up
``` 

_\* Make sure that the ports 80 and 8000 are free. They will be used for the web client and the API._

Finally you can access the client using the link [http://localhost/](http://localhost/)

### Issues

Please note that there are a lot of improvements to do. You can check some of these at the [issues section](https://github.com/caioamaralgit/client-management/issues).
