# AI Chatbot using Deep Learning and Natural Language Processing
* Test out my chatbot at my personal portfolio: https://ongaunjie.netlify.app/
* **IMPORTANT NOTE:** If the chatbot is not functioning, it is because it takes about 2-5 minutes for it to spin up. This is due to the limitations of free deployments on [Render](https://render.com/). The service will go into hibernation mode after 15 minutes of inactivity.

# To learn more about how it works and how to train a custom chatbot, please read below:
## Overview
### This repository covers four main components:
* Development of an intent-based chatbot using NLTK and Deep Learning models. 
* Integrating the Chatbot with APIs (Weather API, Movie API) and also parsing data from wikipedia using the wikipedia library in python.
* Establishment of an API endpoint through Flask, facilitating communication between the chatbot's backend and front-end applications.
* Creation of a user interface for the chatbot using JavaScript, HTML, CSS, and ReactJS, ensuring a seamless and interactive user experience.

## a) Creating the chatbot using NLTK and Feedforward Neural Network (FNN):

## Chatbot Features
- **Intent Recognition:** Utilizes Natural Language Processing to recognize user intents.
- **NLTK Library:** Leverages the NLTK library for NLP tasks such as tokenization, stemming and Bag of Words.
- **Deep Learning Model:** Implements a Feedforward Neutral-Network for predicting user intents. 

## Chatbot applications
* Customer Support: Implementing chatbots for various industries, such as e-commerce, healthcare, finance, and technology, providing efficient and responsive customer support services.

# General process of creating a functional intent-based chatbot:
## 1) Data Preparation: 
* Preparing a dataset that includes examples of user inputs and corresponding intents. Each input is associated with a specific intent.

### A snippet of the data used for training, **the data are in the form of .json format**
```
{
  "intents": [
    {
      "tag": "greeting",
      "patterns": [
        "Hi",
        "Hey",
        "How are you",
        "Hello",
        "Good day",
        "Yo"
      ],
      "responses": [
        "Hey :-)",
        "Hello, thanks for visiting",
        "Hi there, what can I do for you?",
        "Hi there, how can I help?",
        "Greetings!",
        "Good to see you!",
        "Hello, how can I assist you today?",
        "Hi! I'm here to help.",
        "Welcome! How can I be of service?",
        "Hello, what can I answer for you?"
    ]
    },
```

## 2) Data preprocessing: 
### Before model training, it is necessary to perform tokenization, stemming, and create a Bag of Words representation for the intents.
* Tokenization is used to break down user inputs and intents into individual words.
* Stemming is applied to reduce words to their base form, helping the model handle variations.
* Bag of Words is a representation of the intents, creating a numerical format for training the machine learning model.

## 3) Model Training: 
* The prepared dataset, including tokenized and preprocessed intents, is used to train a Feedforward Neural Network (FNN).
* The FNN is implemented using a deep learning framework, such as PyTorch or TensorFlow. (For this repo, it is using PyTorch)
* The neural network architecture comprises input, hidden, and output layers, with appropriate activation functions like ReLU for non-linearity.
* During training, the model learns to map tokenized input sequences to corresponding intents.
* The loss function is employed to measure the difference between predicted and actual intents, and optimization techniques, like stochastic gradient descent, are utilized to minimize this loss.
* The training process involves multiple epochs, refining the model's parameters to enhance its predictive accuracy.
* The trained model is saved for later use in the chatbot application.



# How to train your own custom chatbot ?

## Overview of the python files used for this part:
* ntlk_utils.py: contains custom functions
* model.py: contains a class created for the FNN
* train.py: Used to preprocess the intents.json and train the model
* chat.py: This is the file where it utilizes the model generated from training and predicts on user inputs

## Clone repository and create a python virtual environment
```
git clone https://github.com/ongaunjie1/AI-Chatbot-DL-NLP.git
cd AI-Chatbot-DL-NLP
python -m venv venv
venv\Scripts\activate
```
## Install dependencies:
```
(venv) pip install Flask torch torchvision nltk
```
## Install nltk package
```
(venv) python
>>> import nltk
>>> nltk.download('punkt')
```
## Modify intents.json with different intents and responses for your Chatbot
* This part is where you can customize your own data

## Model training
```
(venv) python train.py
```
![image](https://github.com/ongaunjie1/AI-Chatbot-DL-NLP/assets/118142884/2c796185-d59e-4f94-ac83-46b18490f93d)

## To start chatting with your chatbot
```
(venv) python chat.py
```
![image](https://github.com/ongaunjie1/AI-Chatbot-DL-NLP/assets/118142884/4cf5c47a-385b-4814-9cd1-fc70d4241008)



