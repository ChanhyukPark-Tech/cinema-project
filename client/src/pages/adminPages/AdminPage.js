import React from 'react';
import {Route, Switch} from "react-router-dom";
import AdminMainPage from "./adminMainPage/AdminMainPage";
import FacilityPage from "./facilityPage/FacilityPage";
import AddPropPage from "./facilityPage/AddPropPage";
import PropsDetailPage from "./facilityPage/PropsDetailPage";
import SalesPage from "./salesPage/SalesPage";
import WorkSchedulePage from "./workSchedulePage/WorkSchedulePage";
import CreateProduct from "./createProduct/CreateProduct";


function AdminPage({match,history}) {
    if(localStorage.getItem("name")?.substring(0,3) !== "관리자") history.push('/')

    const {path} = match;
    return (
        <Switch>
            <Route exact path={`${path}`} component={AdminMainPage}/>
            <Route path={`${path}/facility`} component={FacilityPage}/>
            <Route path={`${path}/sales`} component={SalesPage}/>
            <Route path={`${path}/props/addProp`} component={AddPropPage}/>
            <Route path={`${path}/propsDetail`} component={PropsDetailPage}/>
            <Route path={`${path}/schedule`} component={WorkSchedulePage}/>
            <Route path={`${path}/addMovie`} component={CreateProduct}/>
        </Switch>
    );
}

export default AdminPage;