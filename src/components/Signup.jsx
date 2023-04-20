export default function Signup ({ setUser}){
    return(
        <>
        <h2>Sign up</h2>
        <button onClick={()=> setUser('New User')}>Signup</button>
        </>
    )
}