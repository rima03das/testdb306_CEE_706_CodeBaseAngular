Steps:
=============

Build Docker Application Image:
--------------------------------
docker build -t <application name>:<version no>  -f buildconfig/Dockerfile .

Run the docker container:
--------------------------
docker run -d -p 96:80 <application name>:<version no> // -d for for not using terminal
docker run -it -p 96:80 <application name>:<version no> // -it if the terminal needs to be used to stop the server

For Getting the running containers:
----------------------------------
docker ps

Stop a single container:
-------------------------
docker stop <container id>

For getting the container images:
----------------------------------
docker images

Delete a container image:
--------------------------
docker rmi <image id> --force // for dependencies