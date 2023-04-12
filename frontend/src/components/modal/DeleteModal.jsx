import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModal(props) {
    let { show, onHide, state } = props;

    const model = {
      id: state.id,
      investmentAmount: '',
      reInvest: '', 
      withdraw: ''
    }

    function editBankData (e) {
      console.log(model)
      return '';
    }

  return (
    <Modal 
      onHide={onHide}
      show={show} 
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="pt-5" >
        <p className="modal-title border-bottom border-primary pass-modal ms-5 " id="contained-modal-title-vcenter">Personal</p>
      </Modal.Header>
      <Modal.Body className="mx-5">
        <div className="row">
          <div className="col-md-6 my-4">
        <p className="modal-txt2" id="contained-modal-title-vcenter">Investment Amount</p>
        <input type="text" className="form-control p-2" name='investmentAmount' />
        </div>
        <div className="col-md-6 my-4">
        <p className="modal-txt2" id="contained-modal-title-vcenter">Reinvestment Amount</p>
        <input type="text" className="form-control p-2" name='reInvest' />
        </div>
        <div className="col-md-6 my-3">
        <p className="modal-txt2" id="contained-modal-title-vcenter">Withdrawal Amount</p>
        <input type="text" className="form-control p-2" name='withdraw' />
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-start mx-5">
        <Button onClick={editBankData} className="my-4 dash-btn border-0">Update Investment</Button>
        <p className="ms-3 btn fs-6 text-secondary" onClick={props.onHide}>Cancel</p>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;