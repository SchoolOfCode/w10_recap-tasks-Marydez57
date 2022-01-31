import React from 'react';
import articles from '../../libs/articles';
import ArticleContent from '../ArticleContent/articleContent';
import CommentSection from '../CommentSection/commentSection';
import css from './Articles.module.css'

const ArticleContainer = () => {
  return (
  <div>
  <section className={css.container} >
      <div>
          {articles.map((article, id) => {
              return (
                  <div key ={id}> 
                  <ArticleContent
                  key ={article.id}
                  title = {article.title}
                  text = {article.paragraphs}
                  />
                  {article.comments.map((comment) => {
                      return (
                          <CommentSection
                          key = {comment.id}
                          author={comment.name}
                          text = {comment.text}
                           />
                      )
                  })}
                  </div>
              )
          })}
      </div>
  </section>

  </div>
  )
};

export default ArticleContainer;
