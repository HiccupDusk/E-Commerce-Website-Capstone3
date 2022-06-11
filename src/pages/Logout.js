import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
//Redirect
import UserContext from '../UserContext';

// Toast
import Swal from 'sweetalert2';

export default function Logout() {
  // TOAST
  const Toast = Swal.mixin({
    toast: true,
    position: 'bottom-center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  const { unsetUser, setUser } = useContext(UserContext);

  //Clear the localStorage
  unsetUser();

  //By adding the useEffect, this will allow the Logout page to render first before triggering the useEffect which changes the state of our user
  useEffect(() => {
    //Set the user state back into it's original value
    setUser({ id: null });
  }, [setUser]);

  return (
    <>
      <Navigate to='/' />
    </>
  );
}
