#DEMO ON <u>ENVOY PROXY</u>

Run four applications in docker. Below is the command for same:

```bash
sudo docker run -it -d -p 1111:1111  --name node_app1 shaktibxr/node_app1:latest
sudo docker run -it -d -p 2222:2222  --name node_app2 shaktibxr/node_app2:latest
sudo docker run -it -d -p 3333:3333  --name node_app3 shaktibxr/node_app3:latest
sudo docker run -it -d -p 4444:4444  --name node_app4 shaktibxr/node_app4:latest
```

Test if application is running successfully by browsing `localhost:<PORT_NUMBER>`. For eg: `localhost:1111`

Envoy proxy execution :

```bash
envoy --config-path http.yaml
```
or 
```bash
sudo func-e run --config-path http.yaml
```