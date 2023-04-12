import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function EditPhoneModal(props) {
    let { show, onHide, title, body, footer } = props;


  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="pt-5" >
        <p className="modal-title border-bottom border-secondary pass-modal ms-5 " id="contained-modal-title-vcenter">Personal</p>
      </Modal.Header>
      <Modal.Body className="mx-5">
        <div className="row">
          <div className="col-md-6 my-4">
        <p className="modal-txt2" id="contained-modal-title-vcenter">Username</p>
        <input type="password" className="form-control p-2"  />
        </div>
        <div className="col-md-6 my-4">
        <p className="modal-txt2" id="contained-modal-title-vcenter">Phone Number</p>
        <input type="password" className="form-control p-2"  />
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-start mx-5">
        <Button className="my-4 dash-btn border-0 ">Update Profile</Button>
        <p className="ms-3 btn fs-6 text-secondary" onClick={props.onHide}>Cancel</p>
      </Modal.Footer>
    </Modal>
  );
}

export default EditPhoneModal;