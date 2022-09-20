import s from './MyPosts.module.css';
import Post from './Post/Post';
const MyPost = () => {
  return (
    <div>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>add</button>
          <button>remove</button>
        </div>
        <div className={s.posts}>
          <Post masseage="Привет! Я учу Реакт!" like="20" />
          <Post masseage="Привет! Я учу Вью!" like="15" />
        </div>
      </div>
    </div>
  );
};

export default MyPost;
