import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/contactsAction';

function ContactList(props) {
  useEffect(() => {
    props.initContacts();
  });

  const contacts = props.contacts.map((contact) => {
    return <li key={contact.id}>{contact.name}</li>;
  });

  return (
    <div className='list'>
      <div>
        <button className='btn-add'>Add Contact</button>
      </div>
      <ul>{contacts}</ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.list,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    initContacts: () => dispatch(actions.initContacts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
