/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";
import "./NavView.css";

export interface NavViewProps {

}

export function NavView(props: PropsWithChildren<NavViewProps>): ReactElement {


	return (<nav>
		<h1>The Trillium Partners</h1>
		<NavLink exact className={"nav-link"} activeClassName={"nav-link-active"} to="/">home</NavLink>
		<NavLink className={"nav-link"} activeClassName={"nav-link-active"} to="/projects">search</NavLink>
		<NavLink className={"nav-link"} activeClassName={"nav-link-active"} to="/members">selling</NavLink>
		<NavLink className={"nav-link"} activeClassName={"nav-link-active"} to="/news">buying</NavLink>
		<NavLink className={"nav-link"} activeClassName={"nav-link-active"} to="/projects">evaluation</NavLink>
		<NavLink className={"nav-link"} activeClassName={"nav-link-active"} to="/publications">foreclosures</NavLink>
		<NavLink className={"nav-link"} activeClassName={"nav-link-active"} to="/facilities">about</NavLink>
		<NavLink className={"nav-link"} activeClassName={"nav-link-active"} to="/partnerships">contact</NavLink>
	</nav>);
}
