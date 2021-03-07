/**
 * Elijah Cobb
 * elijah@elijahcobb.com
 * elijahcobb.com
 * github.com/elijahjcobb
 */

import React, {ReactElement, PropsWithChildren} from "react";

export interface FooterViewProps {

}

export function FooterView(props: PropsWithChildren<FooterViewProps>): ReactElement {
	return (<span>Hello, FooterView!</span>);
}
