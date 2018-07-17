import React from 'react'

import { splitHilite } from './../utils/utils'

export default function Phrases (props) {
  const { words } = props
  const list = Object.entries(words).map((arr, i) => {
    return (
      <tr key={i}>
        <td>{splitHilite(arr[0])}</td>
        <td>{splitHilite(arr[1])}</td>
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
