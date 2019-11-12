import React from 'react';
import EmployeeList from './components/EmployeeList'

const App=()=> {
  return (
    <>
    <section name="main">
      <div>
      <h1>Employee list</h1>
      <EmployeeList />
      </div>
    </section>     
    </>
  );
}

export default App;
