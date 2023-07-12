import React from 'react';

// The navigation bar at the top
function NavigationBar() {
    const handleMenuClick = () => {
        // handle menu button click
    }

    const handleSearchClick = () => {
        // handle search button click
    }

    return (
        <div>
            <button onClick={handleMenuClick}>Menu</button>
            <button onClick={handleSearchClick}>Search</button>
        </div>
    );
}

// The user grid in the middle
function UserGrid(props: {
        users: {
            id: React.Key |
            // The navigation bar at the top
            null | undefined;
        }[];
    }) {
    return (
        <div>
            {/* Loop over the users and display each one in a profile component */}
            {
                props.users.map((user: { id: React.Key | null | undefined; }) =>
                    <div key={user.id}>
                        {/* Put user profile component here */}
                    </div>
                )
            }
        </div>
    );
}

// The options bar at the bottom
function FooterBar() {
    const handleUsersClick = () => {
        // handle users button click
    }

    const handleMeetClick = () => {
        // handle meet button click
    }

    const handleChatClick = () => {
        // handle chat button click
    }

    return (
        <div>
            <button onClick={handleUsersClick}>Users</button>
            <button onClick={handleMeetClick}>Meet</button>
            <button onClick={handleChatClick}>Chat</button>
        </div>
    );
}

// The main home page component
class HomePage extends React.Component {
    state = {
        users: [] // initially, no users
    }

    fetchUsers = async () => {
        // fetch the users from the backend and setState
    }

    componentDidMount() {
        // fetch users when the component is mounted
        this.fetchUsers();
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <UserGrid users={this.state.users} />
                <FooterBar />
            </div>
        )
    }
}

export default HomePage;