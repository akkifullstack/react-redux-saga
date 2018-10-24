import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ImageView from './components/home';
import PropTypes from 'prop-types';


const Home = ({ match: {url} }) => (
    <div>
    {() => (
        <React.Fragment>
            <Switch>
                <Route exact path={url} component={ImageView} />
            </Switch>
        </React.Fragment>
    )}
    </div>
)



Home.propTypes = {
    match: PropTypes.object.isRequired
};


export default Home;


