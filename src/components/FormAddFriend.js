import React, { useState } from "react";
import Button from "./Button";

export default function FromAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !imageUrl) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      imageUrl: `${imageUrl}?u=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    console.log(newFriend);
    setName("");
    setImageUrl("https://i.pravatar.cc/48");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👫 Friend name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label> 🌄 Image URL</label>
      <input
        type="text"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}
