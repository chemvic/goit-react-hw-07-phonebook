export const getContacts = ({contacts:{items}}) => items;
export const getIsLoading = ({contacts:{isLoading}}) => isLoading;
export const getError = ({contacts:{error}}) => error;

export const getFilter = ({filter}) => filter;
export const getFilteredContacts = ({contacts:{items}, filter}) =>{
   if(!filter){
    return items;
   }
    return items
			.filter(({name, phone}) =>
       name.toLowerCase().includes(filter.toLowerCase())
       ||phone.includes(filter));    
     } 