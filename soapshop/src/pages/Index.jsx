import React from 'react';
import AppNav from '../components/core/AppNav/AppNav';
import Hero from '../components/feature/Hero/Hero';
import Compare from '../components/feature/Compare/Compare';
import ComingSoon from '../components/feature/ComingSoon/ComingSoon';
import Footer from '../components/core/Footer/footer'

class Index extends React.Component {
    render () {
        return (
        <>
       <AppNav/>
       <Hero />
       <Compare />
       <ComingSoon/>
       <Footer/>
        </>
    )
    }
}
export default Index;