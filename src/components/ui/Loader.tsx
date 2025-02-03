import React from 'react'

const Loader = (props:{loader:boolean}) => {
    const loader=props.loader;
  return (
    loader && <span className="loading loading-ball loading-lg  "></span>
  )
}

export default Loader