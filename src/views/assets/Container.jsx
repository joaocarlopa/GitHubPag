import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Overview from './Overview';
import Repositories from './Repositories';
import Projects from './Projects';
import Package from './Package';

import './style/container.css';

export default () => {
    return (
        <Switch>
                <Route path='/over'><Overview></Overview></Route>
                <Route path='/repositories'><Repositories></Repositories></Route>
                <Route path='/projects'><Projects></Projects></Route>
                <Route path='/package'><Package></Package> </Route>

        </Switch>

    )

}