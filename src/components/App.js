import React, { useState } from "react";
import Button from "./Button";
import FromSplitBill from "./FormSplitBill";
import FromAddFriend from "./FormAddFriend";
import FriendsList from "./FriendsList";
import initialFriends from "./data";

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }
  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setShowAddFriend(false);
  }
  function handleSelectFriend(friend) {
    //setSelectedFriend(friend);
    setSelectedFriend((selectedFriend) =>
      selectedFriend && selectedFriend?.id === friend.id ? null : friend
    );
    setShowAddFriend(false);
  }
  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onSelection={handleSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FromAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FromSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
