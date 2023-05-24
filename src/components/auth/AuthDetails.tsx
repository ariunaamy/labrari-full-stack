import { auth } from "firebase";
import { onAuthStateChanged, signOut} from "firebase/auth";
import { useEffect, useState } from "react";
import { AuthUser } from "books.model";


const AuthDetails: React.FC = () => {
    const [authUser, setAuthUser] = useState<AuthUser | null>(null);

    console.log(authUser)

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (user) => {
            if(user){
                setAuthUser({
                    email: user.email || ""
                })
            } else {
                setAuthUser(null);
            }
        });
        return () => {
            listen();
        }
    },[])

    const userSignOut = () => {
        signOut(auth)
        .then(()=>{
            console.log("sign out successful")
        }).catch(error => 
            console.log(error))
    }
  return (
    <div>
        {authUser ? 
        <>
        <p>Signed In as {authUser.email}</p>
        <button onClick={userSignOut}>Sign Out</button>
        </>
         : <p>Signed Out</p>}
    </div>
  )
}

export default AuthDetails; 