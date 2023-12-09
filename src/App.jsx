import { useEffect, useState } from 'react'
import './App.css'
import Header from './component/Header';
import IncomeForm from './component/IncomeForm';

function App() {
  const [income, setIncome] = useState([])
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() => {
    let total = 0
    for (let i = 0; i < income.length; i++) {
      total += parseInt(income[i].price)
    }
    setTotalIncome(total)
  }, [income])

  let deleteItem = (id) => {
   let newArray = income.filter(item => item.id !== id)
   setIncome(newArray)
  }

  return (
    <>
      <div className="App">
        <Header totalIncome={totalIncome} />
        <IncomeForm income={income} setIncome={setIncome} />
        <div className="incomeListContainer">
          {income.map((item) => (
            <div key={item.id} className='incomeList'>
              <div>{item.desc}</div>
              <div>{item.price} TL</div>
              <div>{item.date}</div>
              <button onClick={(e) => deleteItem(item.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
