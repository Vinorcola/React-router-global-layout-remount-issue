import { useEffect, useState, type ReactNode } from "react"
import { Link } from "react-router"

interface Props {
    children?: ReactNode
}

export default function GlobalComponent(props: Props) {
    const [state] = useState(() => {
        console.log("Initialize global component state")

        return Math.random()
    })

    useEffect(() => {
        console.log("Global component mouted")

        return () => {
            console.log("Global component unmounted")
        }
    })

    return (
        <div>
            <ul className="list-disc list-inside">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/other">Other</Link></li>
                <li><Link to="/error">Loader error</Link></li>
                <li><Link to="/unknown">Unknown</Link></li>
            </ul>
            {props.children}
            <div className="fixed bottom-0">Current global state: {state}</div>
        </div>
    )
}
