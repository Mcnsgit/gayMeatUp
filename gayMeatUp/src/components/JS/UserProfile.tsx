import React from 'react';

// Update UserProfile component
function UserProfile({ user }: { user: { name: string; age: number; bio: string; avatarSource: string; onEditProfile: () => void; } }) {
    return (
        <div className="container">
            <p className="name"> {user.name}, {user.age}</p>
            <p className="bio"> {user.bio}</p>
            <button className="edit-profile" onClick={user.onEditProfile}> Edit Profile </button>
        </div>
    );
}


export default UserProfile;
