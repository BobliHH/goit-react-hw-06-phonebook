import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import './App.css';
export const App = () => {
  return (
    <div className="Container">
      <h1 className="Title">Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
    </div>
  );
};