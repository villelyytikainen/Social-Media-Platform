import Friend from "../components/Friend";
import "../assets/styles/FriendsPage.css";
import { useEffect, useState } from "react";

const FriendsPage = () => {
    const searchFriend = () => {
        console.log("search friend");
    };

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch("/api/users").then((response) => {
            response.json().then((data) => {
                setFriends(data);
            });
        });
    }, []);

    return (
        <section id='friends-container'>
            <form action='GET'>
                <input type='text' placeholder='Search' onChange={searchFriend} />
                <button>Search</button>
            </form>
            <ul id='friends-list'>
                {friends.map((friend) => (
                    <Friend key={friend.id} name={friend.name} username={friend.username} city={friend.city} />
                ))}
            </ul>
        </section>
    );
};

export default FriendsPage;
