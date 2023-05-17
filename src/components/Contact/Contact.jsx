import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {deleteContact} from '../../redux/operations';

import css from "./Contact.module.css";

const Contact=({name, number, id})=>{
    const dispatch = useDispatch();

    return(       
        <li className={css.contact_item}>{name}: {number}
        <button type="button" className={css.button}
        onClick={() => dispatch(deleteContact({id}))}>Delete</button>
        </li>        						   
    )
}

Contact.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default Contact;