export function Home({ superu, setSuperu }) {

    const handleLogout = () => {
        setSuperu([])
    }

    return (
        <div>
            <h1>Home</h1>
            <h2>Welcome {superu}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}