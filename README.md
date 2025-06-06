# Motion Canvas Player Dist

This project builds and bundles the Motion Canvas Player so that it can easily be included in other projects or homepages.
Note that this does not build the actual project which needs to be built seperately.
An example project is included.


## Build and Copy Dist Files
Build and copy files to local *dist* directory: 

```bash
docker build --target dist . -t mc_player_dist
container_id=$(docker create mc_player_dist)
docker cp $container_id:/dist ./dist
docker rm $container_id
```

## Run Demo
Build the demo and run it locally:
```bash
docker build --target demo . -t mc_player_dist_demo && docker run --rm -p 8080:8080 mc_player_dist_demo 
```
Then visit [http://localhost:8080/](http://localhost:8080/).

## Specify Motion Canvas Version:

You can use the build argument MC_VERSION to specify the motion canvas version when building the image, e.g., 3.18.0-alpha.0 (3.17.2 is the current default):

```bash
docker build --target dist . -t mc_player_dist --build-arg MC_VERSION="3.18.0-alpha.0"
```
