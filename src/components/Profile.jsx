import s from'./Profile.module.css';
const Profile = ()=>{
	return	  <div className="content">
	<div>
	  <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
	</div>
	<div>ava + desc</div>
	  <div>new post</div>
	<div className={s.posts}>
	  my post
	  <div className={s.item}>1 post</div>
	  <div className={s.item}>2 post</div>
	</div>
 </div>

	}
	export default Profile