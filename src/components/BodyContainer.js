import React from 'react'
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent';
import SearchForm from './SearchForm'


const useStyles = makeStyles((theme) =>({
    heroContent: {
        padding: theme.spacing(10, 0, 6)
    }
}))

const BodyContainer = props => {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                Have you been breached?
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" component="p">
                Search your email below:
            </Typography>
            <Card>
                <CardContent>
                    <SearchForm searchProp={props.searchProp}/>
                </CardContent>
            </Card>
        </Container>
    )
}
export default BodyContainer