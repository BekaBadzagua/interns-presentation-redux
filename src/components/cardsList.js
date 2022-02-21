import Card from './UI/card';
import { connect } from 'react-redux';

function CardsList(props) {
  const cards = props.contacts ? (
    props.contacts.map((contact) => (
      <Card name={contact.name} phone={contact.phone} />
    ))
  ) : (
    <p>select contact</p>
  );

  return <div className='cards'>{cards}</div>;
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.list,
  };
};

export default connect(mapStateToProps)(CardsList);
