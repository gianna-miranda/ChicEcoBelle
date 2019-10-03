import React from 'react';
import AppNav from '../components/core/AppNav/AppNav';
import ContactPg from '../components/feature/Contact/Contact'
class Contacts extends React.Component {
    render () {
        return (
        <>
       <AppNav />
      <ContactPg/>
        </>
    )
    }
}
export default Contacts;