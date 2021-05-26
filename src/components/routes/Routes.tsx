import {Switch,Redirect, Route} from "react-router";
import Error404 from "../error/Error404";
import {Registration} from "../Registration";
import {NewPass} from "../NewPass";
import {RestorePass} from "../RestorePass";
import {Profile} from "../Profile";
import {Test} from "../Test";
import {Login} from "../Login";

export const PATH = {
    LOGIN: '/login',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    RESTORE_PASS: '/restore_pass',
    NEW_PASS: '/pass',
    TEST: '/test',
}

function Routes() {

    return (
        <div>

            <Switch>

                <Route path={'/'} exact render={() => <Redirect to={PATH.TEST}/>}/>

                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.NEW_PASS} render={() => <NewPass/>}/>
                <Route path={PATH.RESTORE_PASS} render={() => <RestorePass/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                 <Route path={PATH.TEST} render={() => <Test/>}/>
                 <Route render={() => <Error404/>}/>

            </Switch>
        </div>
    )
}

export default Routes
