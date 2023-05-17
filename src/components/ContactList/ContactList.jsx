import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { getFilteredContacts } from '../../redux/selectors';
import { useSelector } from 'react-redux';


const ContactList=()=>{

  const filteredContacts=useSelector(getFilteredContacts);    

    return(
             <ul className={css.contacts}>
       {filteredContacts
			.map(({name, phone, id}) => (
      <Contact key={id} name={name} number={phone}
       id={id}/>
            ))}
       </ul>
    )
}

export default ContactList;