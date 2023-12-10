export interface UserAuthStatusState{
    isUserLoggedIn:boolean
    userRole:string
    lastLoggedIn:any
}


export const initialUserAuthStatusState:UserAuthStatusState ={
    isUserLoggedIn: false,
    userRole: "user",
    lastLoggedIn: null
}