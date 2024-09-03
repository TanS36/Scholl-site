import React, { useState } from 'react';

interface UserProfile {
  firstName: string;
  lastName: string;
  age: number;
  dateOfBirth: string;
  class: string;
  course: string;
  profilePhoto: string;
}

interface EditProfilePageProps {
  userProfile: UserProfile;
  updateProfile: (newProfileData: Partial<UserProfile>) => void;
}

const EditProfilePage: React.FC<EditProfilePageProps> = ({ userProfile, updateProfile }) => {
  const [formData, setFormData] = useState<UserProfile>(userProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateProfile(formData); // Pass updated formData to parent component
  };

  return (
    <div className="min-h-screen bg-blue-50 p-8">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-blue-900 mb-4 text-center">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center">
            <label htmlFor="profilePhoto" className="block text-blue-900 font-semibold mr-4">
              Profile Photo:
            </label>
            <img
              src={formData.profilePhoto}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <input type="file" id="profilePhoto" accept="image/*" onChange={handleFileChange} />
          </div>

          <div>
            <label htmlFor="firstName" className="block text-blue-900 font-semibold">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-blue-900 font-semibold">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-blue-900 font-semibold">
              Age:
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="dateOfBirth" className="block text-blue-900 font-semibold">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="class" className="block text-blue-900 font-semibold">
              Class:
            </label>
            <input
              type="text"
              id="class"
              name="class"
              value={formData.class}
              onChange={handleChange}
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-blue-900 font-semibold">
              Course:
            </label>
            <input
              type="text"
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="mt-1 block w-full border-blue-300 rounded-md shadow-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfilePage;
