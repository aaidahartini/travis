import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react"

import{
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,

} from "firebase/auth"

import {ref, get} from "firebase/database";

import {auth, db} from "../firebase";

const AuthContext = createContext(null);

export function AuthProvider({children}){
    const [currentUser, setCurrentUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(
            auth,
            async(user)=>{
                setLoading(true);
                setCurrentUser(null);
                setUserData(null);

                if(!user){
                    setLoading(false);
                    return;
                }
                try{
                    const userRef = ref(db, 'users/${user.uid}');
                    const snapshot = await get(userRef);

                    if (!snapshot.exists()){
                        throw new Error("User not found");
                    }
                    const profile = snapshot.val();

                    const validRole = profile.role_id === "role_admin" || profile.role_id === "role_authority";
                    const approved = profile.approval_status === "approved";
                    const verified = user.emailVerified === true;
                    const emailMatches = profile.email === user.email;

                    if (!validRole || !approved || !verified || !emailMatches){
                        throw new Error("Account is not authorised");
                    }

                    setCurrentUser(user);
                    setUserData(profile);
    
                } catch(error){
                    console.error("Authentication profile error:", error);

                    setCurrentUser(null);
                    setUserData(null);

                    await signOut(auth).catch(console.error);
                }finally{
                    setLoading(false);

                }
            }
        );
        return () => unsubscribe;
    },[]);

    async function login(email, password){
        const credential = await signInWithEmailAndPassword(auth, email, password);
        
        const user = credential.user;

        try {
            const snapshot = await get(ref(db,'users/${user.uid}'));

            if (!snapshot.exist()){
                throw new Error ("Your account is not registered in the system");
            }
            const profile = snapshot.val();

            if (profile.email !== user.email){
                throw new Error ("Account email does not match the database system");
            }
            if (!user.emailVerified){
                throw new Error("Please verify your email before logging in");
            }
            if (profile.approval_status !== "approved"){
                throw new Error("Your account is awaiting for approval");
            }
            if (
                profile.role_id !== "role_admin" && profile.role_id !=="role_authority"
            ){
                throw new Error("Your account does not have dashboard access.");
            }

            setCurrentUser(user);
            setUserData(profile);
            
            return profile;
        } catch(error){
            await signOut(auth);
            throw error;
        }
    }
    async function logout(){
        await signOut(auth);
        setCurrentUser(null);
        setUserData(null);
    }

    return(
        <AuthContext.Provider 
            value={{
                currentUser,
                userData,
                loading, 
                login, 
                logout,
            }}
            >
                {children}
            </AuthContext.Provider>
    );
}

export function useAuth(){
    const context = useContext(AuthContext);

    if (!context){
        throw new Error("useAuth must be used inside AuthProvider");
    }
    return context;
}