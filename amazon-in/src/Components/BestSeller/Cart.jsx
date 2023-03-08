import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import Navbar from "../Homepage/Navbar/Navbar";
import "./Cart.css";

const Cart = () => {
	const [count, setCount] = useState(0);
	const cart = JSON.parse(localStorage.getItem("cart")) || [];
	let totalAmount = 0;

	cart.map(el => (totalAmount = totalAmount + el.price));

	const removeItem = id => {
		let updatedcart = cart.filter(el => {
			return el.id != id;
		});
		setCount(prev => prev + 1);

		localStorage.setItem("cart", JSON.stringify(updatedcart));
	};

	const handleCartclear = () => {
		let cartAfterClearing = [];
		localStorage.setItem("cart", JSON.stringify(cartAfterClearing));
		setCount(prev => prev + 1);
	};
	useEffect(() => {
		setCount(prev => prev + 1);
	}, [totalAmount]);

	return (
		<>
			<Navbar />
			<div>
				<h4>Cart</h4>
			</div>
			<div className="cart">
				{cart == [] ? (
					<div className="empty">
						<h2>Your Amazon Cart is empty.</h2>
						<p>
							Check your Saved for later items below or{" "}
							<a href="">continue shopping</a>
						</p>
					</div>
				) : (
					<div className="cartdiv">
						{cart.map((el, index) => (
							<div className="cartmap" key={el.id}>
								<div>
									<img src={el.image} alt="" />
								</div>
								<div>
									<h3>{el.title}</h3>
									<p>{el.description}</p>
									<p>Brand: {el.brand}</p>
									<h4>PRICE: ${el.price}.00</h4>
								</div>
								<div>
									<DeleteIcon onClick={() => removeItem(el.id)} color="error" />
								</div>
							</div>
						))}
						<div className="total">
							<button onClick={handleCartclear}>Clear Cart</button>
							<h4> Cart total: $ {totalAmount}.00 </h4>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Cart;
