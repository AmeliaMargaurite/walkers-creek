export type ProductType = 
	 {
		title: string,
		slug: string,
		description: string,
		dimensions: string,
		colours: string[],
		price: number,
		gallery: { src: string, alt: string }[],
		productCategory: string[],
	}