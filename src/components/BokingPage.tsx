import React from 'react';

interface Booking {
  room: string;
  day: string;
  time: string;
  bookedBy: string;
}

const bookings: Booking[] = [
  { room: '101', day: 'Monday', time: '10:00 - 12:00', bookedBy: 'Dr. Smith' },
  { room: '102', day: 'Monday', time: '13:00 - 15:00', bookedBy: 'Prof. Johnson' },
  { room: '103', day: 'Tuesday', time: '09:00 - 11:00', bookedBy: 'Dr. Lee' },
  { room: '104', day: 'Wednesday', time: '14:00 - 16:00', bookedBy: 'Dr. Davis' },
  { room: '105', day: 'Thursday', time: '11:00 - 13:00', bookedBy: 'Prof. Brown' },
];

const BokingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">Room Booking Schedule</h1>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Room</th>
              <th className="px-4 py-2 border">Day</th>
              <th className="px-4 py-2 border">Time</th>
              <th className="px-4 py-2 border">Booked By</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{booking.room}</td>
                <td className="px-4 py-2 border">{booking.day}</td>
                <td className="px-4 py-2 border">{booking.time}</td>
                <td className="px-4 py-2 border">{booking.bookedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BokingPage;

