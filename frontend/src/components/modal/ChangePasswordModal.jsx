import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from "../../utils/alert";
import BACKEND from '../../utils/backend';

function ChangePasswordModal(props) {
    let { show, onHide, title, body, footer } = props;
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(e.target.newPassword.value !== e.target.cPassword.value) {
          Alert({
            type: "error",
            message: "The new passwords doesn't match",
        })
        setLoading(false);
        return;
        }
        const payload = {
          oldPassword: e.target.oldPassword.value,
          password: e.target.newPassword.value,
        }
        try{
        const res = await new BACKEND().changePassword(payload);
        if(res?.data?.status === 200) {
          setLoading(false);
        }else{
          setLoading(false);
        }
        }catch(e){
          Alert({
            type: "error",
            message: e.message,
        })
        setLoading(false);
        }
      }

  return (
    <Modal 
      show={show} 
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form action="" onSubmit={async e=> handleSubmit(e)}>
      <Modal.Header className="pt-5" >
        <p className="modal-title border-bottom border-secondary pass-modal ms-5 " id="contained-modal-title-vcenter">Personal</p>
      </Modal.Header>
      <Modal.Body className="mx-5">
        <div className="row">
          <div className="col-md-6 my-4">
        <p className="modal-txt2" id="contained-modal-title-vcenter">Old Password</p>
        <input type="password" name="oldPassword" className="form-control p-2"  />
        </div>
        <div className="col-md-6 my-4">
        <p className="modal-txt2" id="contained-modal-title-vcenter">New Password</p>
        <input type="password" name='newPassword' className="form-control p-2"  />
        </div>
        <div className="col-md-6 my-3">
        <p className="modal-txt2" id="contained-modal-title-vcenter">Confirm New Password</p>
        <input type="password" name="cPassword" className="form-control p-2"  />
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-start mx-5">
        <Button disabled={loading} className="my-4 dash-btn border-0" type='submit'>Change Password</Button>
        <p className="ms-3 btn fs-6 text-secondary" onClick={props.onHide}>Cancel</p>
      </Modal.Footer>
      </form>
    </Modal>
  );
}

export default ChangePasswordModal;