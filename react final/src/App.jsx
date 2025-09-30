import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<div className='main'><h3>HAPTIC</h3></div>
<div className='topline'> <button className ='menu'><i class="bi bi-list"></i></button></div>

      <h1 className='head'>INVENTORY </h1> 
      <p className='drop1'>saved searches </p> 
      <p className='drop2'>columns </p> 
      <p className='drop3'>csv </p> 



      <navbar className= 'navbar' >
        <div>stock overview</div>
        <div className='ora'>all</div>
        <div>components </div>
        <div>kitted</div>
        <div>serialized </div>
        <div>arrving soon</div>
        <div>reorder soon </div>
         </navbar>
    <div className='line'></div>
    <div className='inputdrop'> <h3>Select Inventory In</h3></div>

    <div className='input1'><input type="text"  placeholder='warehouse'/></div>

    <div className='inputdrop1'> <h3>warehouse as of </h3></div>

    <div className='input2'><input type="text"  placeholder='pickdate'/> <i class="bi bi-calendar-date"></i> </div>
 
    <div className='horizantal'></div>
    <div className='four'><i class="bi bi-grid"></i></div>
    <div className='bell'><i class="bi bi-bell"></i></div>
    <div className='down'><i class="bi bi-caret-down-fill"></i></div>

  <div className='orange'><h5>save your searches</h5></div>
    <div className='filter'><input type="text"  placeholder='expand additional filters'/> <i class="bi bi-funnel"></i> </div>
    <div className='tools'><i class="bi bi-tools"></i></div>


    <div className="flex">
    <div className='header'><p>image </p></div>
    <div className='header'><p>product name  </p></div>
    <div className='header'><p>sku  </p></div>
    <div className='header'><p>status </p></div>
    <div className='header'><p>current qty </p></div>
    <div className='header'><p>usage </p></div>
    <div className='header'><p>out of stock </p></div>
    <div className='header'><p>ordrers by  </p></div>
    <div className='header'><p> weeks remaming </p></div>
    </div>


    
    





    </>
  )
}

export default App
