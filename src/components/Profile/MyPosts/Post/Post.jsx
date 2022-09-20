import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"
        alt=""
      />
      <div>{props.masseage}</div>
      <div>
        <span>Like: {props.like}</span>
      </div>
    </div>
  );
};

export default Post;
