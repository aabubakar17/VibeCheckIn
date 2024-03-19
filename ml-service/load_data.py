import pandas as pd

# Sample data creation
data = {'Review': ['This place was great', 'Not what I expected', 'Definitely coming back!'],
        'Sentiment': ['Positive', 'Negative', 'Positive']}
df = pd.DataFrame(data)

print(df)
