import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';


const ShowTable = () => {
    const navigate = useNavigate()
    const [record, setRecord] = useState([])

    const getRecord = async () => {
        const data = await axios.get("http://localhost:5000/record/all")
        setRecord(data.data)
    }

    const deleteUser = async (value) => {
        await axios.delete(`http://localhost:5000/record/delete/${value}`)
        const filter = record.filter( user => user.name !== value )
        setRecord(filter)
    }

    useEffect(() => {
        getRecord()
    }, [])

    return(
        <div style={{padding: '50px', width: "100%", textAlign: 'center'}}>
            {
                record.length > 0 &&
                <Table striped bordered hover>
                <thead>
                    {
                        Object.keys(record[0]).map((val) => {
                            return(
                                <td style={{padding: '8px'}}>{val[0].toUpperCase() + val.slice(1, val.length)}</td>
                            );
                        })
                    }
                    <td style={{padding: '8px'}}>Delete</td>
                </thead>
                <tbody>
                    {
                        record.map((val) => {
                            return(
                                <>
                                    <tr>
                                        <td>{val.name}</td>
                                        <td>{val.phone}</td>
                                        <td>{val.date}</td>
                                        <td>{val.purpose}</td>
                                        <td>{val.personToMeet}</td>
                                        <td><button className='submit-btn' style={{padding: '8px'}} onClick={() => {deleteUser(val.name)}}><span style={{fontSize: '15px'}}>Delete</span></button></td>
                                    </tr>
                                </>
                            );
                        })
                    }
                </tbody>
            </Table>
            }
            <button className='submit-btn' style={{marginTop: '40px'}} onClick={() => {navigate('/')}}><span className='btn-text'>Add Records</span></button>
        </div>
    );
}

export default ShowTable;