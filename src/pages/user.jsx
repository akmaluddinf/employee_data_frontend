import React, { Fragment } from 'react';
import { Route, Switch} from 'react-router-dom'
import UserDetail from './userDetail';
import UserNew from './userNew';
import UserAll from './userAll'

export default function User(){
    return(
        <Fragment>
            <Switch>
                <Route exact path="/user">
                    <UserAll />
                </Route>
                <Route path="/user/new">
                    <UserNew />
                </Route>
                <Route path="/user/:id">
                    <UserDetail />
                </Route>
            </Switch>
        </Fragment>
    )
}