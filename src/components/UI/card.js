const Card = (props) => {
  return (
    <div className='card'>
      <h3>{props.name}</h3>
      <span className='phone'>phone: {props.phone}</span>
      <div className='buttons'>
        <button className='edit'>Edit</button>
        <button className='delete'>Delete</button>
        <button className='close'>Close</button>
      </div>
    </div>
  );
};

export default Card;
