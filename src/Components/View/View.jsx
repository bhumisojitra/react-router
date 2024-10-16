import React, { useEffect, useState } from 'react'
import img from '../../assets/1.avif'
import { useNavigate } from 'react-router'
import helper from '../Helper/Helper';

const View = ({ submitData }) => {

    const navigate = useNavigate();

    const [viewData, setViewData] = useState(submitData);

    const handleEdit = (id) => {
        const singleRec = viewData.find((rec)=>{
            return rec.id === id;
        })

        navigate('/edit', {state: singleRec})
    }

    useEffect(() => {
        setViewData(helper());
    },[])

  return (
    <div>
        <h1 className='text-center mt-4 fw-bold mb-5'>VIEW DATA</h1>

        {viewData.length === 0 ? (
            <div className="no-data-container text-center">
                <img src={img} alt="No data available" className='w-50 h-50 mb-5'/>
                <p className='fw-semibold'>No data available to display.</p>
            </div>
        ) : (

        <table class=" table table-striped">
            <thead>
                <tr style={{textAlign: 'center', height: '60px', verticalAlign: 'middle'}}>
                <th scope="col">NO.</th>
                <th scope="col">First-Name</th>
                <th scope="col">Last-Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Gender</th>
                <th scope="col">Address</th>
                <th scope="col">Symptoms</th>
                <th scope="col">Appointment</th>
                <th scope="col">Doctor-Name</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    viewData.map((data, index) => {
                        return (
                            <tr key={index} style={{textAlign: 'center', height: '80px', verticalAlign: 'middle'}}>
                                <th scope="row">{index + 1}</th>
                                <td>{data.fname}</td>
                                <td>{data.lname}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td>{data.date}</td>
                                <td>{data.time}</td>
                                <td>{data.gender}</td>
                                <td>{data.add}</td>
                                <td>{data.sym}</td>
                                <td>{data.appo}</td>
                                <td>{data.doc}</td>
                                <td><button className='btn btn-danger' onClick={() => handleEdit(data.id)}>Edit</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        )}
    </div>
  )
}

export default View
