import React, { useState, Fragment, useRef } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App = () => {
  const formRef = useRef()
  const [contacts, setContacts] = useState([]);
  const [addFormData, setAddFormData] = useState({
    acceptRules: false,
    address: "",
    city: "",
    country: "",
    email: "",
    password:""
  });

  const [editFormData, setEditFormData] = useState({
    acceptRules: false,
    address: "",
    city: "",
    country: "",
    email: "",
    password:""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    if(fieldName === 'acceptRules'){
      const checked = event.target.checked;
      newFormData['acceptRules'] = checked
    }

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
   
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };

    newFormData[fieldName] = fieldValue;
    if(fieldName === 'acceptRules'){
      const checked = event.target.checked;
      newFormData['acceptRules'] = checked
    }
    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      acceptRules: addFormData.acceptRules,
      address: addFormData.address,
      city: addFormData.city,
      country: addFormData.country,
      email: addFormData.email,
      password: addFormData.password
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    formRef.current.reset()
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      acceptRules: editFormData.acceptRules,
      address: editFormData.address,
      city: editFormData.city,
      country: editFormData.country,
      email: editFormData.email,
      password: editFormData.password
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      acceptRules: contact.acceptRules,
      address: contact.address,
      city: contact.city,
      country: contact.country,
      email: contact.email,
      password: contact.password
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <h2>Add a Contact</h2>
      <form className="contact-form" ref={formRef} onSubmit={handleAddFormSubmit}>
        <div className="col-md-6 mb-3">
    <label for="email" className="col-form-label">Email</label>
    <input type="email" name="email" className="form-control" id="email" placeholder="Email" onChange={handleAddFormChange}/>
  </div>
  <div className="form-group col-md-6">
    <label for="password" className="col-form-label">Password</label>
    <input type="password" name="password" className="form-control" id="password" placeholder="Password" onChange={handleAddFormChange}/>
  </div>
  <div className="col-md-6 mb-3">
    <label for="address" className="col-form-label">Address</label>
    <textarea type="text" className="form-control" name="address" id="address" placeholder="1234 Main St" onChange={handleAddFormChange}></textarea>
  </div>
  <div className="col-md-6 mb-3">
    <label for="city" className="col-form-label">City</label>
    <input type="text" className="form-control" name="city" id="city" onChange={handleAddFormChange}/>
  </div>
  <div className="col-md-6 mb-3">
    <label for="country" className="col-form-label">Country</label>
    <select id="country" name="country" className="form-control" onChange={handleAddFormChange}>
      <option>Choose</option>
      <option value="argentina">Argentina</option>
      <option value="russia">Russia</option>
      <option value="china">China</option>
    </select>
  </div>
  <div className="col-md-6 mb-3">
    <div className="form-check">
      <label className="form-check-label" for="rules">
        <input id="rules" type="checkbox" name="acceptRules" className="form-check-input" onChange={handleAddFormChange}/>
        Accept Rules
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
      </form>

      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

    </div>
  );
};

export default App;
