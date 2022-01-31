import React from 'react';
import { Button } from 'antd';
import {LikeOutlined} from '@ant-design/icons'
import css from './ArticleContent.module.css'

const ArticleContent = ({title, text}) => {
  return (
  <section className={css.section}>
  <h2 className={css.title}>{title}</h2>
  {text.map((p) => (
      <p className={css.text} key ={p.id} >{p.text}</p>
  ))}
  <Button className={css.btn}  type="primary" icon={<LikeOutlined />}>Like </Button>

  </section>
  )
};

export default ArticleContent;
