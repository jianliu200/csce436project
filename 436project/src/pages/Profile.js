
// import React from 'react';

// const Profile = () => {
//   return (
//     <div style={{ backgroundColor: '#F6F6F6', borderRadius: '12px', padding: '24px', boxShadow: '0px 0px 12px #BDBDBD', }}>
//       <h1 style={{ fontSize: '32px', margin: '0',color: "black" }}>First Name: John</h1>
//       <h1 style={{ fontSize: '32px', margin: '0',color:"black" }}>Last Name: Doe</h1>
//       <p style={{ fontSize: '16px', color: '#666', margin: '8px 0 0 0' }}>JohnDoe@email.com</p>
//     </div>
//   );
// };

// export default Profile;
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

function Profile() {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [showModal, setShowModal] = useState(false);

  const handleSave = () => {
    setShowModal(false);
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>

      <button onClick={() => setShowModal(true)}>Edit Profile</button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                className="form-control"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </button>
          <button variant="primary" onClick={handleSave}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Profile;
