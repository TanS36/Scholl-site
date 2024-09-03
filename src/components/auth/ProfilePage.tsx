import React from 'react';
import { Link } from 'react-router-dom';

interface ProfilePageProps {
  userProfile: {
    firstName: string;
    lastName: string;
    age: number;
    dateOfBirth: string;
    class: string;
    course: string;
    profilePhoto: string;
  };
}

const ProfilePage: React.FC<ProfilePageProps> = ({ userProfile }) => {
  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <div className="text-center">
          <img
            src={userProfile.profilePhoto}
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full mb-4"
          />
          <h1 className="text-2xl font-bold text-blue-900 mb-2">
            {userProfile.firstName} {userProfile.lastName}
          </h1>
          <p className="text-blue-700 mb-4">Age: {userProfile.age}</p>
          <p className="text-blue-700 mb-4">Date Of Birth: {userProfile.dateOfBirth}</p>
          <p className="text-blue-700 mb-4">Class: {userProfile.class}</p>
          <p className="text-blue-700 mb-4">Course: {userProfile.course}</p>
          <Link
            to="/edit-profile"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Edit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
