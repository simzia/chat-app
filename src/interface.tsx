export interface UserList {
  name: string,
  messege: string
}

export type User = {
  name: string,
  messege: string
}

export interface UserLoginDetail { 
  name: string
  email: string
  password: string
}

export interface UserDetails {
  name: string
  email: string
}

export interface messageType {
  message: string,
  timestamp: string,
  photoURL: string,
  displayName: string,
  avatarDisp: boolean
}
