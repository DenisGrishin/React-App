import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img
        src="https://www.youloveit.ru/uploads/posts/2020-04/1586360148_youloveit_ru_bill_gravity_falls_na_avu11.jpg"
        alt=""
      />
      <div>454564</div>
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
