import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tbody>
      <tr>
        <td style={{ padding: 20 }}>
          <label className="form-check-label" for="rules">
            <input
              id="rules"
              type="checkbox"
              name="acceptRules"
              disabled
              className="form-check-input"
              checked={contact.acceptRules}
            />
            Accept Rules
          </label>
        </td>
      </tr>
      <tr>
        <td>Address</td>
        <td style={{ padding: 20 }}>{contact.address}</td>
      </tr>
      <tr>
        <td>City</td>
        <td style={{ padding: 20 }}>{contact.city}</td>
      </tr>
      <tr>
        <td>Country</td>
        <td style={{ padding: 20 }}>{contact.country}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td style={{ padding: 20 }}>{contact.email}</td>
      </tr>
      <tr>
        <td>Password</td>
        <td style={{ padding: 20 }}>{contact.password}</td>
      </tr>
      <tr></tr>
      <td>
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tbody>
  );
};

export default ReadOnlyRow;
