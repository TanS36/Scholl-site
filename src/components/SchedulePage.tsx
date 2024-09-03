import React from 'react';

interface ScheduleItem {
  day: string;
  time: string;
  subject: string;
  room: string;
}

const SchedulePage: React.FC = () => {
  const schedule: ScheduleItem[] = [
    { day: 'Monday', time: '09:00 - 10:30', subject: 'Mathematics', room: '101' },
    { day: 'Monday', time: '10:45 - 12:15', subject: 'Physics', room: '102' },
    { day: 'Tuesday', time: '09:00 - 10:30', subject: 'Chemistry', room: '103' },
    { day: 'Wednesday', time: '09:00 - 10:30', subject: 'Biology', room: '104' },
    { day: 'Wednesday', time: '10:45 - 12:15', subject: 'English', room: '105' },
    { day: 'Thursday', time: '09:00 - 10:30', subject: 'History', room: '106' },
    { day: 'Friday', time: '09:00 - 10:30', subject: 'Computer Science', room: '107' },
    { day: 'Friday', time: '10:45 - 12:15', subject: 'Physical Education', room: 'Gym' },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-4">Weekly Class Schedule</h1>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b-2 py-2 text-blue-900">Day</th>
              <th className="border-b-2 py-2 text-blue-900">Time</th>
              <th className="border-b-2 py-2 text-blue-900">Subject</th>
              <th className="border-b-2 py-2 text-blue-900">Room</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className="odd:bg-blue-50 even:bg-white">
                <td className="border-b py-2">{item.day}</td>
                <td className="border-b py-2">{item.time}</td>
                <td className="border-b py-2">{item.subject}</td>
                <td className="border-b py-2">{item.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SchedulePage;
