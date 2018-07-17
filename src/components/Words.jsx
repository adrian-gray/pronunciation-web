import React from 'react'

import { splitHilite } from './../Utils'

export default function Words (props) {
  const { words } = props
  const list = Object.entries(words).map((arr, index) => {
    return (
      <tr key={index}>
        <td>{splitHilite(arr[0])}</td>
        <td>{splitHilite(arr[1])}</td>
      </tr>
    )
  })

  return (
    <div className='words'>
      <table className='table table-sm'>
        <thead>
          <tr>
            <th colSpan='2'>Words</th>
          </tr>
        </thead>
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  )
}
