import React from 'react';

interface Place {
  name: string;
  description: string;
  location: string;
}

const GuidePage: React.FC = () => {
  const places: Place[] = [
    {
      name: 'Library',
      description: 'A quiet place for students to study and borrow books.',
      location: 'Main Building, 1st Floor',
    },
    {
      name: 'Cafeteria',
      description: 'Offers affordable meals and snacks for students and faculty.',
      location: 'Main Building, 2nd Floor',
    },
    {
      name: 'Auditorium',
      description: 'Used for lectures, events, and guest speakers.',
      location: 'West Wing, Ground Floor',
    },
    {
      name: 'Sports Hall',
      description: 'A large gymnasium for physical activities and sports events.',
      location: 'Sports Complex, East Wing',
    },
    {
      name: 'Computer Lab',
      description: 'Available for students who need to complete projects and assignments.',
      location: 'Tech Building, 3rd Floor',
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6 text-center">Campus Guide for New Students</h1>

        <p className="text-lg text-blue-700 mb-8">
          Welcome to the university! Below, you will find key locations around campus to help you navigate easily during your first days here.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4 text-center">Campus Map</h2>
          <img
            src="https://via.placeholder.com/600x400" 
            alt="Campus Map"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">Key Locations</h2>
          <ul>
            {places.map((place, index) => (
              <li key={index} className="mb-6 border-b pb-4">
                <h3 className="text-xl font-bold text-blue-900">{place.name}</h3>
                <p className="text-blue-700">{place.description}</p>
                <p className="text-blue-700 italic">Location: {place.location}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GuidePage;
