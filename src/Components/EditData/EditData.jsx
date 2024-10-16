import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router';

const EditData = ({ submitData, handleSave }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const [edit, setEdit] = useState(location.state);

    const handleEditData = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setEdit({ ...edit, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const update = submitData.map((rec) => {
            if (rec.id === edit.id) {
                return edit; 
            } else {
                return rec;
            }
        });

        handleSave(update);
    }

    return (
        <div>
          <Container>
            <h1 className='text-center mt-4 fw-bold'>MEDICAL APPOINMENT FORM</h1>
            <form className='row p-5' onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="fname" className='mb-3 fw-bold'>First-Name : </label>
                    <input type="text" className="form-control" name="fname" value={edit.fname} onChange={handleEditData} required/>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lname" className='mb-3 fw-bold'>Last-Name : </label>
                    <input type="text" className="form-control" name="lname" value={edit.lname} onChange={handleEditData}  />
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="email" className='mb-3 fw-bold'>Email : </label>
                    <input type="email" className="form-control" name="email" value={edit.email} onChange={handleEditData} />
                </div>
                <div className="col-md-6 mt-4">
                    <label htmlFor="phone" className='mb-3 fw-bold'>Phone : </label>
                    <input type="tel" className="form-control" name="phone" value={edit.phone} onChange={handleEditData} />
                </div>
                <div className="col-md-4 mt-4">
                    <label htmlFor="date" className='mb-3 fw-bold'>Date : </label>
                    <input type="date" className="form-control" name="date" value={edit.date} onChange={handleEditData} />
                </div>
                <div className="col-md-4 mt-4">
                    <label htmlFor="time" className='mb-3 fw-bold'>Time : </label>
                    <input type="time" className="form-control" name="time" value={edit.time} onChange={handleEditData} />
                </div>
                <div className="col-md-4 mt-4">
                    <label className="form-label mb-3 fw-bold">Gender : </label>
                        <select className="form-select" name='gender' onChange={handleEditData} >
                            <option value="" selected>Choose...</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                </div>
                <div className="col-6 mt-4">
                    <label htmlFor="add" className='mb-3 fw-bold'>Address : </label>
                    <textarea type="text" rows="4" cols="50" className="form-control" name="add" value={edit.add} onChange={handleEditData} ></textarea>
                </div>
                <div className="col-6 mt-4">
                    <label htmlFor="sym" className='mb-3 fw-bold'>Symptoms : </label>
                    <textarea type="text" rows="4" cols="50" className="form-control" name="sym" value={edit.sym} onChange={handleEditData} ></textarea>
                </div>
                <div className="col-6 mt-4">
                    <label htmlFor="appo" className='mb-3 fw-bold'>Appointment : </label><br />
                    <input type="radio" name="appo" value="Pending" onChange={handleEditData} />
                        <label for="html" className='ms-2 fw-medium'>Pending</label><br />
                    <input type="radio" name="appo" value="Accepted" onChange={handleEditData} />
                        <label for="css" className='ms-2 fw-medium'>Accepted</label><br />
                    <input type="radio" name="appo" value="Completed" onChange={handleEditData} />
                        <label for="javascript" className='ms-2 fw-medium'>Completed</label>
                </div>
                <div className="col-6 mt-4">
                    <label htmlFor="doc" className='mb-3 fw-bold'>Doctor-Name : </label><br />
                    <input type="radio" name="doc" value="Dr. Atul Abhyankar" onChange={handleEditData} />
                        <label for="html" className='ms-2 fw-medium'>Dr. Atul Abhyankar = Cardiologist</label><br />
                    <input type="radio" name="doc" value="Dr. Ravi Vatiani" onChange={handleEditData} />
                        <label for="css" className='ms-2 fw-medium'>Dr. Ravi Vatiani = Neurologists</label><br />
                    <input type="radio" name="doc" value="Dr. Ganshyam Patel" onChange={handleEditData} />
                        <label for="javascript" className='ms-2 fw-medium'>Dr. Ganshyam Patel = Dermatologist</label>
                </div>
                <div className="col-12 mt-5">
                    <button type="submit" className="btn text-white ps-4 pe-4 pt-2 pb-2 fw-semibold" style={{backgroundColor: '#1A4870'}}>SUBMIT</button>
                </div>
            </form>
          </Container>
        </div>
    )
}

export default EditData
