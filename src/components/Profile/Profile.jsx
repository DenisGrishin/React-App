import Post from './MyPosts/Post/Post';
import s from './Profile.module.css';
const Profile = () => {
  return (
    <div className="content">
      <div>
        <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
      </div>
      <div>ava + desc</div>

      <div>
        my posts
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>add</button>
          <button>remove</button>
          <div className={s.posts}>
            <Post />
            <Post />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
