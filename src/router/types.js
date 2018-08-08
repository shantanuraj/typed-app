/** @flow */

declare type RouterAction = { type: 'router/set', route: string }

declare type RouterState = {|
	currentRoute: string,
	params: mixed
|}