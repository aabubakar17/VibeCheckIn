from flask import Flask, request, jsonify
import json

from transformers import pipeline

# Load the sentiment analysis pipeline
sentiment_pipeline = pipeline("sentiment-analysis", model="bert-base-multilingual-uncased-sentiment")

def analyse_reviews(reviews):
    
    results = []
    for review in reviews:
        
        text_to_analyze = f"{review['title']} {review['pros']}"
       
        result = sentiment_pipeline(text_to_analyze)
        results.append(result[0])
    return results

app = Flask(__name__)

@app.route('/analyse', methods=['POST'])
def analyse():
    data = request.get_json()
    reviews = data.get('result', [])
    
   
    analysis_results = analyze_reviews(reviews)
 
    return jsonify(analysis_results)
    


@app.route('/')
def home():
    return "<h1>ML Microservice for Sentiment Analysis is running.<h1>"

if __name__ == "__main__":
    app.run()