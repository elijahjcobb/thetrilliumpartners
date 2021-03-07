/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {NavView} from "./nav/NavView";
import {MainView} from "./main/MainView";
import {FooterView} from "./footer/FooterView";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export interface AppProps {

}

export function App(props: PropsWithChildren<AppProps>): ReactElement {
	return (<div id={"root"}>
		<Router>
			<NavView/>
			<div id={"main"}>
				<Switch>
					{/*<Route path="/projects"><ProjectsPage/></Route>*/}
					{/*<Route path="/members"><MembersPage/></Route>*/}
					{/*<Route path="/publications"><PublicationsPage/></Route>*/}
					{/*<Route path="/facilities"><FacilitiesPage/></Route>*/}
					{/*<Route path="/contact"><ContactPage/></Route>*/}
					{/*<Route path="/news"><NewsPage/></Route>*/}
					{/*<Route path="/partnerships"><PartnershipsPage/></Route>*/}
					{/*<Route path="/"><HomePage/></Route>*/}
				</Switch>
			</div>
			<FooterView/>
		</Router>
	</div>);
}
