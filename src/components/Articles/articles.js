import React from 'react';
import articles from '../../libs/articles';

const Articles = () => {
  return (
      <main className='Articles'>
     <h1>WikiPigeon</h1>
     {articles.map((article) => {
         return(
             <article key ={article.id} className='post'>
                 <h2>{article.title}</h2>
                 {article.paragraphs.map((paragraph) => (
                     <p key={paragraph.id}>{paragraph.text}</p>
                 ))}
                 <button className='likeBtn'>Like 👍</button>
                 <section className='commentSection'>
                     {article.comments.map((comment) => {
                         return (
                             <div key={comment.id} className='comment'>
                                 <h4>{comment.name} says</h4>
                                 <p>{comment.text}</p>
                             </div>
                         )
                     })}
                 </section>
             </article>
         )
     })}
      </main>
  )
};
    

export default Articles;
