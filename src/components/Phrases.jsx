import React from 'react'

import SplitHilite from './SplitHilite'

export default function Phrases (props) {
  const { words } = props
  const list = Object.entries(words).map((arr, i) => {
    return (
      <tr key={i}>
        <td><SplitHilite str={arr[0]} /></td>
        <td><SplitHilite str={arr[1]} /></td>
      </tr>
    )
  })

  return (
    <div className='phrases'>
      <table className='table table-sm'>
        <thead>
          <tr>
            <th colSpan='2'>Phrases</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}
