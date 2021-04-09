import React from 'react'
import Header from './Header'
import BodyContainer from './BodyContainer'
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route } from "react-router-dom"

const BreachContainer = () => {

  const searchQuery = query => {
    console.log(query);
  }

  return (
    <>
      <Route exact path={`/`}>
        <CssBaseline />
        <Header />
        <BodyContainer searchProp={searchQuery} />
      </Route>
    </>
  )
}
export default BreachContainer