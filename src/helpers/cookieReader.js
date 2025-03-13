import { jwtDecode } from "jwt-decode";

export const decodeCookies = (cookie) =>{
    try {
        const TokenDecode = jwtDecode(cookie)
        if(TokenDecode){
            return TokenDecode
            }
            else return 'error'
    } catch (error) {
        return 'not connected : ' + error
    }
}