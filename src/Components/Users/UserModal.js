import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function UserModal({show, setShow}) {


    return (
        <div
        className={show?"modal show":"modal hide"}
        style={{ display: '', position: 'absolute' }}
      >
        <Modal.Dialog>
          <Modal.Header>
            <Modal.Title>User Edit</Modal.Title>
          </Modal.Header>
  
          <Modal.Body>
            
          </Modal.Body>
  
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
);
}

export default UserModal;