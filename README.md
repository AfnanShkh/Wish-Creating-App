# Wish Creating App

An app that creates preferred wishes by uploading a photo for the wish with your name and message you can also send it to someone to wish them.

---

## Quick Start

This section will be a short guide to setup this app for use with some steps.

### 1. Select a hosting provider for nodejs apps

Some preferred ones are below

- [DigitalOcean](https://www.digitalocean.com)

- [Vultr](https://www.vultr.com)

### 2. Set up a server and the node app

Use this repo's link while cloning in the tutorial

- [How to setup the server](https://youtu.be/kR06NoSzAXY)

### 3. Setup MongoDB

Create and setup account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and copy the DataBase url and paste in a new file `.env` in the base app folder.

```BASH
sudo nano .env
```

Then add `MONGOURL = 'https://yoururl.to.mongo.atlas'` in the .env file and save it.

### 4. Run the below commands

```BASH
npm install
```

This will install the required npm packages.

```BASH
sudo npm install -g pm2
cd the-folder
sudo pm2 start server.js
```

After this continue following the tutorial for nginx part.

### 5. Add ads if you want

This little app also enable to add your ads, Paste the header code of Adsense, I dont know about other ad services. Between the head tag in both the files in views folder which are `index.hbs` and `wish.hbs`.

```HTML
<!-- Adsense header code below -->
<!-- Adsense header code above -->
```

And then paste the adcode between the comments

```HTML
<!-- Adsense code below -->
<!-- Adsense code above -->
```

### That's it, start using the app

---

## Author

# [Afnan Shaikh](http://afnan.dev 'My Website')
