![Alt Text](https://i.pinimg.com/originals/66/1b/2a/661b2a417570e9dbb7878ed2844ab124.gif)

## CONTAINERIZATION NODEJS USING DOCKER

##

#### Technology Used :
- Javascript 
- Node.js
- MongoDB

##

#### Installed Packages
- express
- cors
- mongoose
- mongoose-unique-validator
- dotenv

##

#### Architecture
  Model => Router => Controller

##

#### How To Run / Install 



##### Clone this repository
```bash
git clone https://github.com/HaradaKumiko/container-simple-apps-nodejs.git
```

##

##### Open this project 
```bash
cd container-simple-apps-nodejs
```

##

##### Edit host on your machine
On this documentation i use ubuntu
If you use another OS, just type at your favorite search engine, keyword: "how to modify hosts file on `<insert your OS here>`"

in ubuntu edit hosts file
```
sudo nano /etc/hosts
```
And add this on top the files
```
127.0.0.1       pelanpelanpaksupir.com
```

Don't forget to save it, using ctrl + o & ctrl + x

##

##### Build docker image 
Make sure you already install docker on your machine, and run this command : 
```bash
docker build --no-cache  -t haradakumiko/nodetestdocker -f deploy/Dockerfile . 
```

##

##### Run your apps 
Insert the deploy directory
```bash
cd deploy
```

If you have web server and mongodb running on your background process, don't forget stop it first
Make sure you already install docker compose on your machine, and run this command : 
```bash
docker compose up -d
```

##### Ready to go  

And voila, you can access your apps on domain :
```bash
http://pelanpelanpaksupir.com
```

Don't forget to read the damn documentation api on the postman file collection