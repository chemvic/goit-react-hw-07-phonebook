import { useSelector } from 'react-redux';
import { getFilteredContacts } from '../../redux/selectors';
import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";
import Loader from '../Loader/Loader';

const App =()=> {
    
    const filteredContacts=useSelector(getFilteredContacts);    

      return (
    <div
      style={{
        padding: 30,      
        color: '#010101'
      }}
    > 
    <h1 className="title">Phonebook</h1>

    <ContactForm />
     
    <h2 className="title">Contacts</h2>
      
      <Filter />
      {filteredContacts.length>0 ? <ContactList/> 
      :<p>There is no contacts by query</p>}  

      <Loader visible={true}/>  

    </div>
  );
  

};
export default App;