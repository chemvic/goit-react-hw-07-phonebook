import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/operations";
import { getFilteredContacts, getIsLoading, getError } from '../../redux/selectors';
import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";
import Loader from '../Loader/Loader';
import css from "./App.module.css";

const App =()=> {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

    const filteredContacts= useSelector(getFilteredContacts); 
    const isLoading = useSelector(getIsLoading);   
    const error = useSelector(getError);   

      return (
    <div
      style={{
        padding: 30,      
        color: '#010101'
      }}
    > 
    <h1 className="title">Phonebook</h1>

    <ContactForm />
     
     <div className={css.contactsTitle}>
     <h2 className="title">Contacts</h2>
     {isLoading && !error && <Loader visible={true}/>}
      </div>    

          {error&&<p style={{
        fontSize:32,          
        color: 'red'
      }}>{error}</p>} 

      <Filter />       
      {filteredContacts.length>0 ? <ContactList/> 
      :<p>There is no contacts by query</p>}    
      
    </div>
  ); 

};
export default App;