import React from 'react';
import {Switch,Route} from 'react-router-dom';

/*--PAGES--*/

import Login from '../pages/Login';
import Register from '../pages/Register';
import Chooseplan from '../pages/Chooseplan';
import ForgetPassword from '../pages/ForgetPassword';
import MarketingResources from '../pages/MarketingResources';
import SingleMarketing from '../pages/Single_marketing';
import AccountSetting from '../pages/AccountSetting';
import ChangePassword from '../pages/ChangePassword';

/*--DASHBOARD--*/

import Dashborad from '../dashboard/Dashboard'
import Campaign from '../dashboard/New_campaign'
import Campaignsetting from '../dashboard/Campaign_setting';
import golcampaign from '../dashboard/gol_campaign';
import customlanding from '../dashboard/Customize_landing';
import Addfilter from '../dashboard/Add_filter';
import Addsound from '../dashboard/Add_sound';
import BrandedGol from '../dashboard/BrandedGol'
import DataCapture from '../dashboard/DataCapture';
import PublishUrl from '../dashboard/PublishUrl';

/*--ADMIN--*/

import AdminDashboard from '../admin/dashboard/Dasboard';
import Company from '../admin/dashboard/Company';
import CampaignPlan from '../admin/dashboard/CampaignPlan';
import Marketing from '../admin/dashboard/Marketing';
import AddArticle from '../admin/dashboard/AddArticle';
import SongsLibrary from '../admin/dashboard/SongsLibrary';
import AddSound from '../admin/dashboard/AddSound';
import FilterLibrary from '../admin/dashboard/FilterLibrary';
import EditArticle from '../admin/dashboard/EditArticle';
import CompanyDashboard from '../admin/dashboard/CompanyDashboard';


const Routes = () => {
    return(
        <section>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
                <Route path='/plans' component={Chooseplan} />
                <Route path='/dashboard' component={Dashborad} />
                <Route path='/campaign' component={Campaign} />
                <Route path='/camp-setting' component={Campaignsetting} />
                <Route path='/golcampaign' component={golcampaign} />
                {/* <Route path='/custom-landing/:id' component={customlanding} /> */}
                <Route path='/custom-landing' component={customlanding} />
                <Route path='/branded-gol' component={BrandedGol} />
                <Route path='/data-capture' component={DataCapture} />
                <Route path='/publish-url' component={PublishUrl} />
                <Route path='/add-filter' component={Addfilter} />
                <Route path='/add-sound' component={Addsound} />
                <Route path='/marketing-resources' component={MarketingResources} />
                <Route path='/single-marketing' component={SingleMarketing} />
                <Route path='/account-setting' component={AccountSetting} />
                <Route path='/change-password' component={ChangePassword} />
                <Route path='/forget-password' component={ForgetPassword} />
                
                {/* admin */}    

                <Route path='/admin' component={AdminDashboard} />
                <Route path='/company' component={Company} />
                <Route path='/campaign-plan' component={CampaignPlan} />
                <Route path='/marketing' component={Marketing} />
                <Route path='/add-article' component={AddArticle} />
                <Route path='/songs-library' component={SongsLibrary} />
                <Route path='/add-newsound' component={AddSound} />
                <Route path='/filter-library' component={FilterLibrary} />
                <Route path='/edit-article' component={EditArticle} />
                <Route path='/company-dashboard' component={CompanyDashboard} />

            </Switch>
        </section>    
    )
}
export default Routes; 