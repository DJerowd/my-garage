import React from 'react';
import articles from '../../data/articles.json';

import '../../Styles/layout.css'
import '../../Styles/home.css'

const Article = () => {
    return (
        <div className="article">
            {articles.map(article => (
                <div key={article.id} className="article-item">
                    <a href={article.link} target="_blank" rel="noopener noreferrer">
                        <img src={article.image} alt={article.title} />
                        <h3 className="article-title-overlay">{article.title}</h3>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default Article;