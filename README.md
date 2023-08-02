# Supabase To MongoDB

### Description
This project is a web application developed using Express.js as the backend development framework. It provides functionalities for uploading images to Supabase buckets and storing the image URLs in MongoDB. The Multer library is utilized for handling the image uploads. The project uses PNPM as the package manager.

### Features
Upload images to Supabase buckets
Store image URLs in MongoDB
Handle image uploads using Multer
### Installation
Clone the repository:
```

git clone https://github.com/divyanshu1810/supabase-to-mongo.git
```
Install PNPM:
```

npm install -g pnpm
```
Install project dependencies using PNPM:
```
cd supabase-to-mongo
pnpm install
```
Configure environment variables:

Create a .env file in the root directory.

Add the following variables to the .env file:
```
SUPABASE_URL=your-supabase-url
SUPABASE_API_KEY=your-supabase-key
MONGODB_URI=your-mongodb-uri
SUPABASE_BUCKET_NAME=your-supabase-bucket-name
PORT=your-port
```
Start the application:
```

pnpm start
```

Technologies Used
* Express.js: Backend web application framework
* Supabase: Cloud storage service for image uploads
* MongoDB: Database for storing image URLs
* Multer: Middleware for handling multipart/form-data (image uploads)
* PNPM: Package manager

### Pictures
#### Postman
![image](https://github.com/divyanshu1810/supabase-to-mongo/assets/91051053/c81b3426-14c0-4b95-80b1-aa4cc8926ff0)

#### Supabase
![image](https://github.com/divyanshu1810/supabase-to-mongo/assets/91051053/eed2f783-b662-48d4-a631-10c8a7a1686c)

#### MongoDB
![image](https://github.com/divyanshu1810/supabase-to-mongo/assets/91051053/e8605cd3-1965-4e57-bc97-874f761b6e02)

#### URL
![image](https://github.com/divyanshu1810/supabase-to-mongo/assets/91051053/e2477a24-1cbd-4969-98e7-bacd511deebb)


