import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, BuildingOfficeIcon, UsersIcon, MapIcon } from '@heroicons/react/24/outline';

const MainPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 p-8">
      <svg
        className="absolute bottom-0 left-0 w-full transform rotate-0 -z+1"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#e0f2fe" 
          d="M0,192L30,202.7C60,213,120,235,180,229.3C240,224,300,192,360,186.7C420,181,480,203,540,213.3C600,224,660,224,720,213.3C780,203,840,181,900,181.3C960,181,1020,203,1080,229.3C1140,256,1200,288,1260,293.3C1320,299,1380,277,1410,266.7L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </svg>
      <h1 className="text-5xl font-extrabold text-blue-900 mb-12 text-center">
        Welcome to the Student Portal
      </h1>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <Link
          to="/bookings"
          className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
        >
          <CalendarIcon className="w-12 h-12 text-blue-600 mb-4" />
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Room Bookings</h2>
            <p className="text-blue-600">Manage and view room bookings efficiently.</p>
          </div>
        </Link>
        <Link
          to="/schedule"
          className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
        >
          <BuildingOfficeIcon className="w-12 h-12 text-blue-600 mb-4" />
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Class Schedule</h2>
            <p className="text-blue-600">Check and manage your class schedule.</p>
          </div>
        </Link>
        <Link
          to="/teachers"
          className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
        >
          <UsersIcon className="w-12 h-12 text-blue-600 mb-4" />
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Teachers</h2>
            <p className="text-blue-600">Find information about your teachers.</p>
          </div>
        </Link>
        <Link
          to="/guides"
          className="bg-white text-blue-900 p-6 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl flex flex-col items-center"
        >
          <MapIcon className="w-12 h-12 text-blue-600 mb-4" />
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">Guides</h2>
            <p className="text-blue-600">Explore guides and maps for new students.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
