import Button from './button';

const Card = (props) => {
  return (
    <div className='card'>
      <h3>asd</h3>
      <span className='phone'>phone: 598 33 33 66</span>
      <div className='buttons'>
        <Button type='edit'>Edit</Button>
        <Button type='delete'>Delete</Button>
        <Button type='close'>Close</Button>
      </div>
    </div>
  );
};

export default Card;
