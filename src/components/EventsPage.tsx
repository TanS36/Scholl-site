import React, { useState } from 'react';

interface Event {
  name: string;
  location: string;
  date: string;
  image?: string;
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      name: 'Opening of New Class',
      location: 'Room 101',
      date: '2024-09-10',
    },
    {
      name: 'Win in Casino Competition',
      location: 'Casino Royale',
      date: '2024-10-05',
      image: 'https://via.placeholder.com/150', // Example image URL for the event
    },
    {
      name: 'Worst Student of the Century',
      location: 'Auditorium',
      date: '2024-12-01',
    },
  ]);

  const [newEvent, setNewEvent] = useState<Event>({
    name: '',
    location: '',
    date: '',
    image: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewEvent((prevEvent) => ({
      ...prevEvent,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEvent((prevEvent) => ({
          ...prevEvent,
          image: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveEvent = () => {
    if (newEvent.name && newEvent.location && newEvent.date) {
      setEvents([...events, newEvent]);
      setNewEvent({ name: '', location: '', date: '', image: '' }); // Clear the form
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">Events</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Add New Event</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={newEvent.name}
              onChange={handleChange}
              placeholder="Event Name"
              className="border p-2 rounded-md"
            />
            <input
              type="text"
              name="location"
              value={newEvent.location}
              onChange={handleChange}
              placeholder="Location"
              className="border p-2 rounded-md"
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleChange}
              className="border p-2 rounded-md"
            />
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              className="border p-2 rounded-md"
              accept="image/*"
            />
          </div>
          <button
            onClick={saveEvent}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Event
          </button>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-4">Upcoming Events</h2>
          <ul>
            {events.map((event, index) => (
              <li key={index} className="mb-4 border-b pb-4 flex items-center">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900">{event.name}</h3>
                  <p className="text-blue-700">Location: {event.location}</p>
                  <p className="text-blue-700">Date: {event.date}</p>
                </div>
                {event.image && (
                  <img
                    src={event.image}
                    alt={event.name}
                    className="ml-4 w-32 h-32 object-cover rounded"
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
