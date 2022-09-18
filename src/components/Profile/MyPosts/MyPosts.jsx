import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPost=()=>{
	return <div>
	my posts
	<div>
	<div>  
		<textarea name="" id="" cols="30" rows="10"></textarea>
		<button>add</button>
		<button>remove</button>
	</div>
	  <div className={s.posts}>
		<Post/>
		<Post/>
	  </div>
	</div>
 </div>
}

export default MyPost