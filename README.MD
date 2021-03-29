# peerjs-with-cors

A peerjs server with CORS


## docker build

```sh
docker build -t peerjs-with-cors:1.0 .
```

## docker run

```sh
 docker run --env-file .env -d  -p 3002:3002 --name peerjs-with-cors  peerjs-with-cors:1.0 
```

## Docker Hub

```sh
docker tag peerjs-with-cors:1.0 dremond71/peerjs-with-cors:1.0
docker push dremond71/peerjs-with-cors:1.0
```