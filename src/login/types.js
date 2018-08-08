/** @flow */

declare type LoginAction = { type: 'login/start' }
	| { type: 'login/success', payload: string }
	| { type: 'login/failure', payload: mixed }

declare type LoginState = {|
	username: string,
	password: string,
	token: string | null,
	error: Error | null
|}