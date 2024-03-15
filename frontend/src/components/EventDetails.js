import React, { useState } from "react";
import { formatDistanceToNow } from "date-fns";

const EventDetails = ({ event, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedEvent, setUpdatedEvent] = useState({ ...event });

  const handleDelete = () => {
    onDelete(event._id);
  };

  const handleUpdate = () => {
    onUpdate(updatedEvent);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="event-details">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={updatedEvent.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={updatedEvent.description}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={updatedEvent.date}
            onChange={handleChange}
          />
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{event.name}</h4>
          <p>{event.description}</p>
          <p>
            {formatDistanceToNow(new Date(event.date), { addSuffix: true })}
          </p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default EventDetails;
