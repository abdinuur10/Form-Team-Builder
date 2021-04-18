import React, { useState } from "react";

const Teamform = (props) => {
    const [formTeam, setFormTeam] = useState({
        id: Date.now(),
        Name: "",
        Email: "",
        Role: ""
    })
}

const handleChanges = (event) => {
    let newInfor = { ...Teamform, [event.target.name]: event.target.value };

    setFormTeam(newInfor);
};

const submitForm = (event) => {
    event.preventDefault();
    props.addNewinfor(formTeam);
};

return (
    <form onSubmit={submitForm}>
        <lebel htmlFor="Name">Name</lebel>
        <input
            type= "text"
            placeholder="Enter Name"
            id="Name"
            name="Email"
            value={formTeam.Name}
            onChange={handleChanges}
        />
        
        <label htmlFor="Email">Email</label>
        <textarea
            id="Email"
            placeholder = "write your Email here"
            name="Email"
            value={formTeam.Email}
            onChange={handleChanges}
        />
        <label htmlFor="Role">Role</label>
        <textarea
            id="Role"
            placeholder = "Role in here"
            name="Role"
            value={formTeam.Role}
            onChange={handleChanges}
        />
        <button type="submit">submit</button>
    </form>
    );

export default Teamform;
