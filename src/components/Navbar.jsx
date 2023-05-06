import { Link } from "react-router-dom";

const Navbar = () => {
		
	const links = [
		{
			title:'Home',
			url:'/'
		},

		{
			title:'Cars',
			url:'/cars'
		},
		{
			title:'Accesories',
			url:'/accesories'
		},
		{
			title:'About',
			url:'/about'
		},
	]
	const title = "GetCars.in";
	return (
		<header className="fixed z-50 w-full">
			<nav className="flex justify-around text-gray-800 items-center bg-white/30 backdrop-filter backdrop-blur-md w-fill p-4">
				<div>
					<h2 className="text-xl font-semibold">{title}</h2>			
				</div>
				<ul className="flex gap-5"> 	
					{
						links.map((link,index) => {
							return <li key={index}><Link className="hover:underline hover:text-gray-600" to={link.url}>{link.title}</Link></li>
						})
					}
				</ul>
			</nav>
		</header>
	)
}

export default Navbar;
