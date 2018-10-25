import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeView from './components/home';
import PropTypes from 'prop-types';


const Home = ({ match: { url } }) => (

    <React.Fragment>
        <Switch>
            <Route exact path={url} component={HomeView} />
        </Switch>
    </React.Fragment>

)



Home.propTypes = {
    match: PropTypes.object.isRequired
};


export default Home;