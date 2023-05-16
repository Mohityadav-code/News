const express = require('express');
const cors = require('cors');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f736862a0e634754ad2df9eaf663eb6c');

const app = express();
app.use(cors());

app.get('/news', (req, res) => {
  newsapi.v2.everything({
    q: 'india',
    sources: 'bbc-news,the-verge',
    domains: 'bbc.co.uk, techcrunch.com',
    from: '2023-05-15',
    to: '2023-05-16',
    language: 'en',
    sortBy: 'relevancy',
    page: 2
  }).then(response => {
    res.json(response);
  }).catch(error => {
    console.error(error);
    res.status(500).send('Error occurred while fetching news.');
  });
});
  app.listen(3001, () => console.log('Server running on port 3001'));