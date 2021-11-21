import React from 'react';
import {Route, Switch} from "react-router-dom";
import AdminMainPage from "./adminMainPage/AdminMainPage";
import FacilityPage from "./facilityPage/FacilityPage";
import PostDamagePage from "./facilityPage/PostDamagePage";
import PropsDetailPage from "./facilityPage/PropsDetailPage";
import SalesPage from "./salesPage/SalesPage";


function AdminPage({match,history}) {
    if(localStorage.getItem("name") !== "관리자") history.push('/')

    const {path} = match;
    return (
        <Switch>
            <Route exact path={`${path}`} component={AdminMainPage}/>
            <Route path={`${path}/facility`} component={FacilityPage}/>
            <Route path={`${path}/sales`} component={SalesPage}/>
            <Route path={`${path}/addProp`} component={PostDamagePage}/>
            <Route path={`${path}/propsDetail`} component={PropsDetailPage}/>
        </Switch>
    );
}

export default AdminPage;