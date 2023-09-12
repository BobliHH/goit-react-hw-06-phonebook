import './ContactItem.css';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from '../../redux/contactsSlice';

function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className="ContactItems">
      <span className="ContactName">{contact.name}</span>
      <span>{contact.number}</span>
      <button className="Button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
