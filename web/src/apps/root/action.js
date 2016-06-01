export function auth (logined = true){
	return ({reduce})=>reduce('auth',logined)
}
