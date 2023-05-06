import Carousel from "./Carousel"
import Cars from "./Cars"

export const Home = () => {
	return (
		<main>
		<Carousel/>
		<div className="px-16 pt-10">
			<h2 className="text-3xl p-4 text-gray-800 font-semibold underline underline-offset-2">Featured Cars</h2>		<Cars/>
		</div>
		</main>
	)
}
