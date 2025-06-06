# build the core and player from source
FROM node:lts as build

# without v prefix!
ARG MC_VERSION="3.17.2" 
ENV NODE_ENV=$MC_VERSION

WORKDIR /build

RUN wget https://github.com/motion-canvas/motion-canvas/archive/refs/tags/v${MC_VERSION}.tar.gz
RUN tar -xzf v${MC_VERSION}.tar.gz

WORKDIR /build/motion-canvas-${MC_VERSION}
RUN ls

RUN npm i -g husky #TODO: is this needed?
RUN npm install --force --loglevel verbose
RUN npm run prepare
RUN npm run core:build
RUN npm run player:build


# Bundle the core modules into a single file. Copy the player and core into /dist/
FROM build as dist

RUN npm i -g esbuild

WORKDIR /build/motion-canvas-${MC_VERSION}/packages/core
RUN esbuild lib/index.js --bundle --outfile=/dist/core.js --format=esm

WORKDIR /build/motion-canvas-${MC_VERSION}/packages/player
RUN cp ./dist/main.js /dist/player.js


FROM node:lts as demo

RUN npm install --global http-server

WORKDIR /demo
COPY demo/* .

# COPY --from=dist /dist /dist # we could copy the dist folder here, but we just reuse the existing dist folder
COPY dist/* /demo/dist/

CMD ["http-server", "--cors", "-p8080", "/demo"]