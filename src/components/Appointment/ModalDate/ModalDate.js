import React from 'react';
import './ModalDate.css';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const ModalDate = ({modalIsOpen, closeModal, appointmentOn, date}) => {
  const {register, handleSubmit, errors} = useForm();
  const onSubmit = data => {

    data.service = appointmentOn;
    data.date = date;
    data.created = new Date();

    fetch('http://localhost:5000/addAppointment', {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert('Appointment created successfully');
      }
      else{

      }
    })

    
  };
    return (
        <div>
            
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center" style={{color: '#1CC7C1'}}>{appointmentOn}</h2>
        <div className="text-secondary text-center">ON {date.toDateString()}</div>

        <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <input {...register("name", {required: true})}  type="text" className="form-control mt-4" placeholder="Username" />
          
        </div>
        <div className="form-group">
          <input {...register("number", {required: true})}  type="number" className="form-control mt-4" placeholder="Phone Number"/>
          {/* {errors.number && <span className="text-danger">This field is required</span>} */}
        </div>
        <div className="form-group">
          <input {...register("email", {required: true})} type="email" className="form-control mt-4" placeholder="Enter Your Email"/>
          {/* {errors.email && <span className="text-danger">This field is required</span>} */}
        </div>
        <div className="form-group">
          <button type="submit" className="btn button modal-button">Send</button>
        </div>

        </form>

      </Modal>
        </div>
    );
};

export default ModalDate;