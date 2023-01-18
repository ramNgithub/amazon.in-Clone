import axios from "axios";
import React, { useEffect, useState } from "react";

const MobilePage = () => {
	const [products, setProducts] = useState([]);
	useEffect(() => {
		axios("http://localhost:8080/mobileProducts")
			.then(res => {
				setProducts(res.data.accessories);
				console.log(res.data.accessories);
			})
			.catch(err => console.log("err in getting data:", err));
	}, []);
	return (
		<div>
			{products.map(product => (
				<img
					src={product.thumbnailImage}
					alt="hufuf"
					width="200px"
					style={{ border: "1px solid red" }}
				/>
			))}
		</div>
	);
};

export default MobilePage;
