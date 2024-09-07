import React from 'react'

const Numberlist = ({number}) => {
  return (
    <ul>
      {number.map((number) => (
        <li key={number.id}>
            {number}
        </li>
      )
      )}
    </ul>
  )
}

export default Numberlist
