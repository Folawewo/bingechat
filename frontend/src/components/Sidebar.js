import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { AppContext } from '../context/appContext';

function Sidebar() {
  const rooms = ['first room', 'second room', 'third room'];
  const user = useSelector((state) => state.user);
  const {
    socket,
    setMembers,
    members,
    setCurrentRoom,
    setRooms,
    privateMmemberMsg,
    rooms,
    setPrivateMemberMsg,
    currentRoom,
  } = useContext(AppContext);
  socket.off('new-user').on('new-user', (payload) => {
    console.log(payload);
  });
  if (!user) {
    return <></>;
  }
  return (
    <>
      <h2>Available rooms</h2>
      <ListGroup>
        {rooms.map((room, idx) => (
          <ListGroup.Item key={idx}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  );
}

export default Sidebar;
