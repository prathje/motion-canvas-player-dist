# Bundle the core modules into a single file. Copy the player and core into /dist/
FROM node:lts as dist

# without v prefix!
ARG MC_VERSION="3.17.2" 
ENV NODE_ENV=$MC_VERSION

RUN npm i -g esbuild

WORKDIR /build

RUN npm i @motion-canvas/player@${MC_VERSION}
RUN npm i @motion-canvas/core@${MC_VERSION}

WORKDIR /build/node_modules/@motion-canvas/core

RUN esbuild lib/index.js --bundle --outfile=/dist/core.js --format=esm

WORKDIR /build/node_modules/@motion-canvas/player
RUN cp ./dist/main.js /dist/player.js


FROM node:lts as demo

RUN npm install --global http-server

WORKDIR /demo
COPY demo/* .

# COPY --from=dist /dist /dist # we could copy the dist folder here, but we just reuse the existing dist folder
COPY dist/* /demo/dist/

CMD ["http-server", "--cors", "-p8080", "/demo"]