import React from 'react'
import './container.scss'

function Container({ children, className }) {
	if (className !== undefined) {
		return <div className={'container' + className}>{children}</div>
	} else {
		return <div className={'container'}>{children}</div>
	}
}

export default Container
