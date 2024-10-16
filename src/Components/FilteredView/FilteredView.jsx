import React from 'react';

const FilteredView = ({ submitData, status }) => {
    
  const filteredData = submitData.filter(data => data.appo === status);

  return (
    <div>
      <h1 className="text-center mt-4 fw-bold mb-5">{status} APPOINTMENTS</h1>
      <table className=" table table-striped">
        <thead>
          <tr style={{textAlign: 'center', height: '60px', verticalAlign: 'middle'}}>
            <th scope="col">No.</th>
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
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
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
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12" className="text-center">
                No {status} appointments found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilteredView;
