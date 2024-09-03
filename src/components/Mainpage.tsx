import React from 'react';
import { Link } from 'react-router-dom';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <h1 className="text-4xl font-bold text-blue-900 mb-12 text-center">
        Welcome to the Student Portal
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link
          to="/events"
          className="bg-blue-400 text-white p-6 rounded-lg shadow-lg hover:bg-blue-500 transition-colors"
        >
          View Events
        </Link>
        <Link
          to="/bokings"
          className="bg-blue-300 text-white p-6 rounded-lg shadow-lg hover:bg-blue-400 transition-colors"
        >
          View Room Bookings
        </Link>
        <Link
          to="/dociment-requests"
          className="bg-blue-200 text-white p-6 rounded-lg shadow-lg hover:bg-blue-300 transition-colors"
        >
          Request Documents
        </Link>
        <Link
          to="/schedule"
          className="bg-blue-600 text-white p-6 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
        >
          View Schedule
        </Link>
        <Link
          to="/teachers"
          className="bg-blue-700 text-white p-6 rounded-lg shadow-lg hover:bg-blue-800 transition-colors"
        >
          View Teachers
        </Link>
        <Link
          to="/guides"
          className="bg-blue-800 text-white p-6 rounded-lg shadow-lg hover:bg-blue-900 transition-colors"
        >
          View Guides
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
