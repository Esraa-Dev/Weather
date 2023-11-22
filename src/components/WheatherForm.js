import React from 'react'

const WheatherForm = (props) => {
  return (
    <form onSubmit={props.getWheather}>
      <input type="text" name="city" placeholder="City" />
      <input type="text" name="country" placeholder="Country" />
      <button type="submit">GetWheather</button>
    </form>
  );
}

export default WheatherForm