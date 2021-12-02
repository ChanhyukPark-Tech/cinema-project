import React from 'react';
import {Route, Switch} from "react-router-dom";
import StaffMainPage from "./StaffMainPage";
import StaffSalaryPage from "./StaffSalaryPage";
import StaffNoticePage from "./StaffNoticePage";
import StaffContact from "./StaffContact";


function StaffPage({match}) {

    const {path} = match;
    return (
        <Switch>
            <Route exact path={`${path}`} component={StaffNoticePage}/>
            <Route path={`${path}/notice`} component={StaffNoticePage}/>
            <Route path={`${path}/salary`} component={StaffSalaryPage}/>
            <Route path={`${path}/contact`} component={StaffContact}/>
        </Switch>
    );
}

export default StaffPage;