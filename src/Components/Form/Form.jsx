import { Container } from 'react-bootstrap'

const Form = ({ handleInput, handleSubmit, input }) => {

  return (
    <div>
      <Container>
        <h1 className='text-center mt-4 fw-bold'>MEDICAL APPOINMENT FORM</h1>
        <form className='row p-5' onSubmit={handleSubmit}>
            <div className="col-md-6">
                <label htmlFor="fname" className='mb-3 fw-bold'>First-Name : </label>
                <input type="text" className="form-control" name="fname" value={input.fname} onChange={handleInput} required/>
            </div>
            <div className="col-md-6">
                <label htmlFor="lname" className='mb-3 fw-bold'>Last-Name : </label>
                <input type="text" className="form-control" name="lname" value={input.lname} onChange={handleInput}  />
            </div>
            <div className="col-md-6 mt-4">
                <label htmlFor="email" className='mb-3 fw-bold'>Email : </label>
                <input type="email" className="form-control" name="email" value={input.email} onChange={handleInput} />
            </div>
            <div className="col-md-6 mt-4">
                <label htmlFor="phone" className='mb-3 fw-bold'>Phone : </label>
                <input type="tel" className="form-control" name="phone" value={input.phone} onChange={handleInput} />
            </div>
            <div className="col-md-4 mt-4">
                <label htmlFor="date" className='mb-3 fw-bold'>Date : </label>
                <input type="date" className="form-control" name="date" value={input.date} onChange={handleInput} />
            </div>
            <div className="col-md-4 mt-4">
                <label htmlFor="time" className='mb-3 fw-bold'>Time : </label>
                <input type="time" className="form-control" name="time" value={input.time} onChange={handleInput} />
            </div>
            <div className="col-md-4 mt-4">
                <label className="form-label mb-3 fw-bold">Gender : </label>
                    <select className="form-select" name='gender' onChange={handleInput} >
                        <option value="" selected>Choose...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
            </div>
            <div className="col-6 mt-4">
                <label htmlFor="add" className='mb-3 fw-bold'>Address : </label>
                <textarea type="text" rows="4" cols="50" className="form-control" name="add" value={input.add} onChange={handleInput} ></textarea>
            </div>
            <div className="col-6 mt-4">
                <label htmlFor="sym" className='mb-3 fw-bold'>Symptoms : </label>
                <textarea type="text" rows="4" cols="50" className="form-control" name="sym" value={input.sym} onChange={handleInput} ></textarea>
            </div>
            <div className="col-6 mt-4">
                <label htmlFor="appo" className='mb-3 fw-bold'>Appointment : </label><br />
                <input type="radio" name="appo" value="Pending" onChange={handleInput} />
                    <label for="html" className='ms-2 fw-medium'>Pending</label><br /> 
                <input type="radio" name="appo" value="Accepted" onChange={handleInput} />
                    <label for="css" className='ms-2 fw-medium'>Accepted</label><br />
                <input type="radio" name="appo" value="Completed" onChange={handleInput} />
                    <label for="javascript" className='ms-2 fw-medium'>Completed</label>
            </div>
            <div className="col-6 mt-4">
                <label htmlFor="doc" className='mb-3 fw-bold'>Doctor-Name : </label><br />
                <input type="radio" name="doc" value="Dr. Atul Abhyankar" onChange={handleInput} />
                    <label for="html" className='ms-2 fw-medium'>Dr. Atul Abhyankar = Cardiologist</label><br />
                <input type="radio" name="doc" value="Dr. Ravi Vatiani" onChange={handleInput} />
                    <label for="css" className='ms-2 fw-medium'>Dr. Ravi Vatiani = Neurologists</label><br />
                <input type="radio" name="doc" value="Dr. Ganshyam Patel" onChange={handleInput} />
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

export default Form
