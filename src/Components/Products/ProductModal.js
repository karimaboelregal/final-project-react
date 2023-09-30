import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function ProductModal({ show, setShow, updateProduct, addProduct, data }) {


	const [name, setName] = useState("");
	const [stock, setStock] = useState("");
	const [price, setPrice] = useState();
	const [category, setCategory] = useState();
	const [image, setImage] = useState();

	const saveChanges = () => {
		var finalData = {};
		finalData.nameEn = name
		finalData.unitPrice = price
		finalData.stockQuantity = stock
		finalData.categoryId = category
		finalData.image = image
		if (data[0] == null) {
			finalData.nameAr = ""
			addProduct(finalData);
		} else {
			finalData.id = data[0]["id"]
			finalData.nameAr = data[0]["nameAr"]
			updateProduct(finalData["id"], finalData)
		}
		setShow(false);
	}

	useEffect(() => {
		setName(data[0] != null ? data[0]["nameEn"] : "");
		setStock(data[0] != null ? data[0]["stockQuantity"] : "");
		setPrice(data[0] != null ? data[0]["unitPrice"] : "");
		setCategory(data[0] != null ? data[0]["categoryId"] : "");
		setImage(data[0] != null ? data[0]["image"] : "");
	}, [data])



	return (
		<div
			className={show ? "modal show" : "modal hide"}
			style={{ display: '', position: 'absolute' }}
		>
			<Modal.Dialog>
				<Modal.Header>
					<Modal.Title>User Edit</Modal.Title>
				</Modal.Header>

				<Modal.Body style={{ paddingLeft: "100px", paddingRight: "100px" }}>
					<div style={{ paddingBottom: "15px", paddingTop: "15px" }}>
						<label>Product Name</label>
						<input type="text" id='productName' className="form-control" placeholder="Product Name" aria-label="Product Name" value={name} onChange={e => setName(e.target.value)} />
					</div>
					<div style={{ paddingBottom: "15px" }}>
						<label>Stock</label>
						<input type="text" id='productStock' className="form-control" placeholder="Stock" aria-label="Stock" value={stock} onChange={e => setStock(e.target.value)} />
					</div>
					<div style={{ paddingBottom: "15px" }}>
						<label>Price</label>
						<input type="text" id='productPrice' className="form-control" placeholder="Price" aria-label="Price" value={price} onChange={e => setPrice(e.target.value)} />
					</div>
					<div style={{ paddingBottom: "15px" }}>
						<label>Image</label>
						<input type="text" className="form-control" placeholder="Image" aria-label="Image" value={image} onChange={e => setImage(e.target.value)} />
					</div>

					<div style={{ paddingBottom: "15px" }}>
						<label>Category</label>
						<select name="cars" id="cars" style={{ display: "block", width: "100%", padding: "10px" }} onChange={e => setCategory(e.target.value)}>
							{data[1] != null ? data[1].map((item, index) => {
								if (item["id"] == category) {
									return (
										<option value={item["id"]} selected>{item["name"]}</option>
									)
								}
								return (
									<option value={item["id"]}>{item["name"]}</option>
								)
							}) : ""}
						</select>
					</div>


				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
					<Button variant="primary" onClick={saveChanges}>Save changes</Button>
				</Modal.Footer>
			</Modal.Dialog>
		</div>
	);
}

export default ProductModal;