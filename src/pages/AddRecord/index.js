import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import './styles.css'

const AddRecord = () => {
    const navigate = useNavigate();
    const [record, setRecord] = useState({
        name: "",
        phone: "",
        date: "",
        purpose: "",
        personToMeet: ""    
    })

    const handleChange = (event) => {
        setRecord({ ...record, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(record));
        axios.post("http://localhost:5000/record/add", {data: record})
        setRecord({name: "", phone: "", date: "", purpose: "", personToMeet: ""})
      };

    return(
        <div className='add-record'>
                <div>
                    <div className='record-heading'>Reception Form</div>
                </div>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={record.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={record.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="date"
                        placeholder="Date"
                        value={record.date}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="purpose"
                        placeholder="Purpose"
                        value={record.purpose}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="personToMeet"
                        placeholder="Person To Meet"
                        value={record.personToMeet}
                        onChange={handleChange}
                    />
                </div>
                <div className='buttons-record'>
                    <button className='submit-btn' onClick={handleSubmit}><span className='btn-text'>Submit Record</span></button>
                    <button className='submit-btn' onClick={() => {navigate('/show')}}><span className='btn-text'>Show Records</span></button>
                </div>
        </div>
    );
}

export default AddRecord;