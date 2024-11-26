import { Route, Routes, useNavigate } from 'react-router'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home.jsx'
import Form from './Components/Form/Form'
import View from './Components/View/View.jsx'
import { useEffect, useState } from 'react'
import helper from './Components/Helper/Helper.jsx'
import EditData from './Components/EditData/EditData.jsx'
import FilteredView from './Components/FilteredView/FilteredView.jsx'

function App() {

  const [input, setInput] = useState({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      gender: '',
      add: '',
      sym: '',
      appo: '',
      doc: 'pending',
  })

  const [submitData, setSubmitData] = useState(helper());
  const navigate = useNavigate();

  const handleInput = (e) => {
      console.log(e.target.value);

      let name = e.target.name;
      let value = e.target.value;

      setInput({ ...input, [name]: value })
  }

  const handleSubmit = (e) => {

      e.preventDefault();

      input.id = Math.floor(Math.random()* 10000);
      
      setSubmitData([...submitData, input]);

      setInput({
          fname: '',
          lname: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          gender: '',
          add: '',
          sym: '',
          appo: '',
          doc: '',
      })

      navigate('/view')
  }

  const handleEdit = (data) => {

    navigate('/edit', { state: data });
  };

  const handleSave = (saveRec) =>{

    setSubmitData(saveRec);
    navigate('/view')
  }

  const handleDelete = (id) => {

    const deleteData = submitData.filter((rec) => {
        return rec.id !== id;
    })

    setSubmitData(deleteData);

  }

 useEffect(() => {
  localStorage.setItem('storage', JSON.stringify(submitData));
}, [submitData]);

  return (
    <>
    <Header />
      <Routes>
        {/* <Route path='/' element={<Home />}/> */}
        <Route path='/' element={<Form handleInput={handleInput} handleSubmit={handleSubmit} input={input} />}/>
        <Route path='/view' element={<View submitData={submitData} handleEdit={handleEdit} handleDelete={handleDelete}/>}/>
        <Route path='/edit' element={<EditData submitData={submitData} handleSave={handleSave}/>}/>
        <Route path="/pending" element={<FilteredView submitData={submitData} status="Pending" />} />
        <Route path="/accepted" element={<FilteredView submitData={submitData} status="Accepted" />} />
        <Route path="/completed" element={<FilteredView submitData={submitData} status="Completed" />} />
      </Routes>
    </>
  )
}

export default App
