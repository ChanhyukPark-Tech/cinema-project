import React from 'react';
import {Route, Switch} from "react-router-dom";
import AdminMainPage from "./adminMainPage/AdminMainPage";
import FacilityPage from "./facilityPage/FacilityPage";


function AdminPage({match}) {
    const {path} = match;
    return (
        <Switch>
            <Route exact path={`${path}`} component={AdminMainPage}/>
            <Route path={`${path}/facility`} component={FacilityPage}/>
        </Switch>
    );
}

export default AdminPage;