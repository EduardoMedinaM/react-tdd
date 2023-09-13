import React from 'react';
import useUsers from './useUsers';

const Users = ({useComponent = useUsers}) => {
    
  const {isLoading,error,users} = useComponent();

   if (isLoading) return 'Loading...';

   if (error) return 'An error has occurred: ' + error.message;

  return (
    <>
      {users?.map(({id,name,email})=>(
         <p key={id}>
          <span>{name}</span>''
          <span>{email}</span>
         </p>
         
      ))}
    </>
  )
}

export default Users