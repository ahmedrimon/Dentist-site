import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({date}) => {
    const bookingData = [

        {
            id:1,
            subject: 'Teeth Orthodontics',
            vistiingHour: '8:00 AM - 9:00AM',
            totalSpace: 10
        },
        {
            id:2,
            subject: 'Cosmetic Dentistry',
            vistiingHour: '8:00 AM - 9:00AM',
            totalSpace: 10
        },
        {
            id:3,
            subject: 'Teeth Cleaning',
            vistiingHour: '8:00 AM - 9:00AM',
            totalSpace: 10
        },
        {
            id:4,
            subject: 'Cavity Protection',
            vistiingHour: '8:00 AM - 9:00AM',
            totalSpace: 10
        },
        {
            id:5,
            subject: 'Teeth Orthodontics',
            vistiingHour: '8:00 AM - 9:00AM',
            totalSpace: 10
        },
        {
            id:6,
            subject: 'Teeth Orthodontics',
            vistiingHour: '8:00 AM - 9:00AM',
            totalSpace: 10
        }
    
    ]
    return (
        <section>
            <h2 style={{color: '#1CC7C1'}} className="text-center">Available Appointsment on {date.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} booking={booking} date={date}/>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;