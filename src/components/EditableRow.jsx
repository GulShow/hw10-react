import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tbody>
        <tr>
             <label className="form-check-label" for="rules">
        <input id="rules" type="checkbox" name="acceptRules" checked={editFormData.acceptRules} className="form-check-input" value={editFormData.acceptRules} onChange={handleEditFormChange}/>
        Accept Rules
      </label> 
        </tr>
     
      <tr>
        <label for="email" className="col-form-label">Address</label>
    <input type="address" name="address" className="form-control" value={editFormData.address} id="address" placeholder="Address" onChange={handleEditFormChange}/>
      </tr>
      <tr>
    
<label for="city" className="col-form-label">City</label>
    <input type="text" className="form-control" value={editFormData.city} name="city" id="city" onChange={handleEditFormChange}/>
      </tr>
      <tr>
       
<label for="country" className="col-form-label">Country</label>
    <select id="country" name="country" value={editFormData.country} className="form-control" onChange={handleEditFormChange}>
      <option>Choose</option>
      <option value="argentina">Argentina</option>
      <option value="russia">Russia</option>
      <option value="china">China</option>
    </select>
      </tr>
      <tr>
      <label for="email" className="col-form-label">Email</label>
    <input type="email" name="email" className="form-control" value={editFormData.email} id="email" placeholder="Email" onChange={handleEditFormChange}/>
      </tr>
      <tr>
      <label for="password" className="col-form-label">Password</label>
    <input type="password" name="password" className="form-control" id="password" value={editFormData.password} placeholder="Password" onChange={handleEditFormChange}/>
      </tr>
      <tr>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </tr>
    </tbody>
  );
};

export default EditableRow;
