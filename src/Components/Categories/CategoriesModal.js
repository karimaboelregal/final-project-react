import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';

function CategoryModal({ show, setShow, updateCategory, addCategory, data }) {


	const [name, setName] = useState("");

	const saveChanges = () => {
		if (data["name"] != undefined) {
			var finalData = {}
			finalData.id = data["id"]
			finalData.name = name
			updateCategory(finalData.id, finalData)
		} else {
			var finalData = {}
			finalData.name = name
			addCategory(finalData)

		}
	}

	useEffect(() => {
		setName(data["name"] != undefined ? data["name"] : "");
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
						<label>Name</label>
						<input type="text" id='productName' className="form-control" placeholder="Category Name" aria-label="Category Name" value={name} onChange={e => setName(e.target.value)} />
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

export default CategoryModal;