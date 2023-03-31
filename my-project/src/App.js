
import './App.css';
// import getCountry from './components/getCountry.component';
const getCountry=()=>{
  return(
      <div>
    <div>
      <label htmlFor="parents">Select a parent:</label>
      <select id="parents" className="dropdown" value={selectedParent} onChange={handleParentChange}>
        <option value="">Select a parent</option>
        <option value="parent1">Book Name 1</option>
        <option value="parent2">Book Name 2</option>
        <option value="parent3">Book Name 3</option>
      </select>

      {selectedParent && (
        <div>
          <label htmlFor="children">Select a child:</label>
          <select id="children" className="dropdown" value={selectedChild} onChange={handleChildChange}>
            <option value="">Select a child</option>
            {selectedParent === 'parent1' && (
              <>
                <option value="child1">First_Name Last_Name</option>
                <option value="child2">First_Name Last_Name</option>
                <option value="child3">First_Name Last_Name</option>
              </>
            )}
            {selectedParent === 'parent2' && (
              <>
                <option value="child4">First_Name Last_Name</option>
                <option value="child5">First_Name Last_Name</option>
                <option value="child6">First_Name Last_Name</option>
              </>
            )}
            {selectedParent === 'parent3' && (
              <>
                <option value="child7">First_Name Last_Name</option>
                <option value="child8">First_Name Last_Name</option>
                <option value="child9">First_Name Last_Name</option>
              </>
            )}
          </select>
        </div>
      )}
    </div>
      </div>
  );
}
function App() {
  return (
    <div className="App">
        <getCountry/>
        {/* hello world */}
    </div>
  );
}


export default App;
