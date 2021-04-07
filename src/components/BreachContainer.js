import React from 'react'
import Header from './Header'
import BodyContainer from './BodyContainer'
import CssBaseline from '@material-ui/core/CssBaseline';

const BreachContainer = () => {
  
  const searchQuery = query => {
    console.log(query);
  }

  return (
    <>
      <CssBaseline />
      <Header />
      <BodyContainer searchProp={searchQuery}/>
    </>
  )
}
export default BreachContainer