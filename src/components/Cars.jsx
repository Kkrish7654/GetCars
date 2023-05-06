import { useEffect, useState } from "react"

const Cars = () => {
		
	const [allCars, setAllCars] = useState([]);

	useEffect(() => {
		const getCars = async() => {
			const res = await fetch("/src/components/json/Featured.json");
			const cars = await res.json();
			setAllCars(cars.cars);
		}

		getCars();
	},[])

	console.log(allCars);

	return (
		<>
			<section className="flex flex-wrap gap-4 items-center justify-center">
				{
					allCars.map((items) => {
						return (
							<div className="bg-slate-300 rounded-md">
								<div className="h-60 w-96 overflow-hidden">
									<img className="h-full w-full rounded-md object-cover" src={items.image} alt={items.title}/>
								</div>
								<div className="p-3">
									<h1 className="font-semibold">{items.title}</h1>
								</div>
							</div>
						)
					})
				}
			</section>	
		</>
	)
}

export default Cars;
