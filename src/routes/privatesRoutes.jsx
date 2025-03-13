import { useAuthContext } from "../screens/authContext";

export const PrivateRoutes = ({children,role}) => {
    const { userDetails } = useAuthContext();

    console.log(userDetails?.role?.length)
    if(userDetails?.role?.length > 0){
        const roleMap = userDetails.role.map(item => item.name)
        
        console.log(role)
        const shouldRenderChildren = Array.isArray(role)
        ? role.some(r => roleMap.includes(r))
        : roleMap.includes(role); 

        return shouldRenderChildren ? children : null
    }
    else if(userDetails?.role?.length === undefined && document.cookie !== null){ 
        console.log('else')
        // return window.location.href = '/panel/login'
    }
}