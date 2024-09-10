import React, { useState } from 'react';

interface Teacher {
  name: string;
  department: string;
  office: string;
  email: string;
  phone: string;
}

const TeachersPage: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([
    {
      name: 'John Doe',
      department: 'Mathematics',
      office: 'Room 201',
      email: 'johndoe@college.edu',
      phone: '+123456789',
    },
    {
      name: 'Jane Smith',
      department: 'Computer Science',
      office: 'Room 305',
      email: 'janesmith@college.edu',
      phone: '+987654321',
    },
    {
      name: 'Michael Brown',
      department: 'Physics',
      office: 'Room 410',
      email: 'michaelbrown@college.edu',
      phone: '+112233445',
    },

  ]);

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">Teachers</h1>
        <ul>
          {teachers.map((teacher, index) => (
            <li key={index} className="mb-6 border-b pb-4">
              <h3 className="text-xl font-semibold text-blue-900">{teacher.name}</h3>
              <p className="text-blue-700">Department: {teacher.department}</p>
              <p className="text-blue-700">Office: {teacher.office}</p>
              <p className="text-blue-700">Email: <a href={`mailto:${teacher.email}`} className="text-blue-500 underline">{teacher.email}</a></p>
              <p className="text-blue-700">Phone: <a href={`tel:${teacher.phone}`} className="text-blue-500 underline">{teacher.phone}</a></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TeachersPage;
