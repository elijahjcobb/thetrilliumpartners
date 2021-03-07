/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";

export interface MainViewProps {

}

export function MainView(props: PropsWithChildren<MainViewProps>): ReactElement {
	return (<span>Hello, MainView!</span>);
}
