import React from 'react';
import { Button } from 'antd';

const ArticleContent = ({author:title, text}) => {
  return (
  <section className='section'>
  <h2 className='title'>{title}</h2>
  {text.map((p) => (
      <p className='text' key ={p.id} >{p.text}</p>
  ))}
  <Button className='btn'  type="primary">Like 👍</Button>

  </section>
  )
};

export default ArticleContent;
