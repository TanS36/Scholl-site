import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditProfilePage from './components/EditProfilePage';
import EventsPage from './components/EventsPage';
import BokingPage from './components/BokingPage';
import DocimentRequestPage from './components/DocimentRequestPage';
import SchedulePage from './components/SchedulePage';
import MainLayout from './components/MainLayout';
import TeachersPage from './components/TeachersPage';
import GuidesPage from './components/GuidesPage';
import NotFoundPage from './components/NotFoundPage';
import HelpPage from './components/HelpPage'; 
import MainPage from './components/Mainpage'; 
import LoginPage from './components/auth/LoginPage';
import ProfilePage from './components/auth/ProfilePage';

const App: React.FC = () => {
  const [userProfile, setUserProfile] = useState({
    firstName: 'Bob',
    lastName: 'Smith',
    age: 20,
    dateOfBirth: '2004-01-01',
    class: '2A',
    course: 'Computer Science',
    profilePhoto: 'https://via.placeholder.com/150',
  });

  const updateProfile = (newProfileData: Partial<typeof userProfile>) => {
    setUserProfile((prevProfile) => ({
      ...prevProfile,
      ...newProfileData,
    }));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<MainPage />} />
          <Route path="profile" index element={<ProfilePage userProfile={userProfile} />} />
          <Route path="edit-profile" element={<EditProfilePage userProfile={userProfile} updateProfile={updateProfile} />}/>
          <Route path="events" element={<EventsPage />} />
          <Route path="bokings" element={<BokingPage />} />
          <Route path="dociment-requests" element={<DocimentRequestPage />} />
          <Route path="schedule" element={<SchedulePage />} />
          <Route path="teachers" element={<TeachersPage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="help" element={<HelpPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;




