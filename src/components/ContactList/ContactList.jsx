import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { getFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';


const ContactList=()=>{

  const filteredContacts=useSelector(getFilteredContacts);    

    return(
             <ul className={css.contacts}>
       {filteredContacts
			.map(({name, number, id}) => (
      <Contact key={id} name={name} number={number}
       id={id}/>
            ))}
       </ul>
    )
}

export default ContactList;