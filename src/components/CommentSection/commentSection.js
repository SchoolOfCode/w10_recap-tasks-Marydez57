import React from 'react';
import css from './CommentSection.module.css'


const CommentSection = ({author:name,text}) => {
  return (
      <section className='comment'>
      <h4 className={css.title}>{name} says:</h4>
      <p className={css.text}>{text}</p>

      </section>
  )
  
};

export default CommentSection;
