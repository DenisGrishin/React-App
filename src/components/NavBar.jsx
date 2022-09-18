import s from'./NavBar.module.css';

const NavBar = ()=>{
	return	 <nav className={s.nav}>
	<ul>
	  <li>
		 <a href="#" className={`${s.item} ${s.active}`}>Profile</a>
	  </li>
	  <li>
		 <a href="#" className={s.item}>Message</a> 
	  </li>
	  <li>
		 <a href="#" className={s.item}>Music</a>
	  </li>
	  <li>
		 <a href="#" className={s.item}>Settings</a>
	  </li>
	</ul>
 </nav>
	}
	export default NavBar