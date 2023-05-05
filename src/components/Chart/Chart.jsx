import React from 'react'
import ChartBar from './ChartBar'
import './styles/Chart.css'

const Chart = (props) => {

  // Grab chartData as props from ExpenseChart 
  const dataValues = props.data.map(data => data.value) 
  const totalMaximum = Math.max(...dataValues)

  return (
    <div className='chart'>
        {props.data.map(data => <ChartBar key={data.label} value={data.value} maxValue={totalMaximum} label={data.label}/>)}
    </div>
  )
}

export default Chart
