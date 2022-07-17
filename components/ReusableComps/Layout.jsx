import Link from "next/link"

const Layout = ({children}) => {
    return (
        <div className="mainBody">
            {children}
        </div>
    )
}

export default Layout