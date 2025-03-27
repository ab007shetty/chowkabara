import React from 'react';
import axios from 'axios';

const AccountSettingsModal = ({ showModal, handleSignOut, user }) => {
  const handleSignOutClick = async () => {
    if (user) {
      try {
        // Call the provided handleSignOut function
        await handleSignOut();

        // Make a request to the local server to delete the user's database
        await axios.post(`http://localhost:5000/api/logout/${user.email}`);
        console.log('Logout successful and database deleted.');
      } catch (error) {
        console.error('Error during sign out:', error);
      }
    } else {
      console.log('No user is signed in.');
    }
  };

  return (
    showModal && (
      <div className="absolute top-12 right-0 mt-2 w-80 bg-white text-black border border-gray-300 rounded-lg shadow-xl z-50">
        <div className="p-6 space-y-4">
          <button
            onClick={handleSignOutClick}
            className="w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    )
  );
};

export default AccountSettingsModal;
