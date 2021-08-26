import React, { useState } from 'react';
import ModalDate from '../ModalDate/ModalDate';
import './BookingCard.css';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
      }
    
    
      function closeModal() {
        setIsOpen(false);
      }
    return (
        <div className="col-md-4 mt-5">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title" style={{color: '#1CC7C1'}} >{booking.subject}</h5>
                    <h6>{booking.vistiingHour}</h6>
                    <p>{booking.totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn button book-button">BOOK APPOINTMENT</button>

                    <ModalDate modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={booking.subject} date={date}></ModalDate>
                </div>
            </div>
        </div>
    );
};

export default BookingCard;