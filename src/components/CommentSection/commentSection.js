
import React, { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import css from './CommentSection.module.css'


/*const CommentSection = ({author:name,text}) => {
  return (
      <section className='comment'>
      <h4 className={css.title}>{name} says:</h4>
      <p className={css.text}>{text}</p>

      </section>
  )
  
};*/


const CommentSection = ({author, text}) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction('liked');
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction('disliked');
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
  ];

  return (
    <Comment
    className={css.container}
      actions={actions}
      author= {author}
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" alt="{title}" />}
      content={
        <p>
          {text}
        </p>
      }
      datetime={
        <Tooltip author = {moment().format('YYYY-MM-DD HH:mm:ss')}> a few second ago
        </Tooltip>
      }
    />
  );
};

export default CommentSection;
