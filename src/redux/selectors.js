export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;





export const getFilter = ({filter}) => filter;
export const getFilteredContacts = ({contacts.items, filter}) =>{
   if(!filter){
    return contacts;
   }
    return contacts
			.filter(({name, number}) =>
       name.toLowerCase().includes(filter.toLowerCase())
       ||number.includes(filter));    
     } 