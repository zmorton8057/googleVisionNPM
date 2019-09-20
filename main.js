const express =require('express');
const app = express();
require('dotenv').config()

async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient({
        keyFilename: 'TongueTiedApp-01194b2ee772.json'
    });
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('./DSC_0703.JPG');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    labels.forEach(label => console.log(label.description));
  }
  quickstart()

  app.listen(5000, ()=>console.log("Server Running"))

