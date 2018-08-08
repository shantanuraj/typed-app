/** @flow */

declare type Action = LoginAction
	| RouterAction

declare type State = {|
	router: RouterState,
	login: LoginState
|}