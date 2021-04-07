import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'

const SearchForm = props => {
  const [searchText, setSearchText] = useState({
    search: "",
  })

  const onChange = e => {
    setSearchText({
      ...searchText,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = e => {
    props.searchProp(searchText.search)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Grid 
          container 
          direction="row" 
          justify="center" 
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={9}>
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
              value={searchText.search}
              name="search"
              onChange={onChange}
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Primary
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default SearchForm