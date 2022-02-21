import Card from './UI/card';
import { connect } from 'react-redux';

function CardsList(props) {
  let cards = props.contacts
    .filter((contact) => contact.onBoard)
    .map((contact) => (
      <Card key={contact.name} name={contact.name} phone={contact.phone} />
    ));

  cards = cards.length ? cards : <p>select contact</p>;

  return <div className='cards'>{cards}</div>;
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.list,
  };
};

export default connect(mapStateToProps)(CardsList);
