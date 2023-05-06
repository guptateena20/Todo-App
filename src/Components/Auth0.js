import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import TodoList from './TodoList';

const Auth0 = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div className='loading_div'>Loading ...</div>;
    }
  return (
    <>
    {isAuthenticated && <TodoList/>}
    {/* <TodoList/> */}
    </>
  )
}

export default Auth0