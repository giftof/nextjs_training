'use client' // means hydrate on client side

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
// import NestedClientComponent from './nestedClientComponent'
import styles from '../styles/navigation.module.css'

export default function Navigation() {
    const path = usePathname()
    const [count, setCount] = useState(0)
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
                </li>
                <li>
                    <Link href="/about-us">About Us</Link> {path === "/about-us" ? "🔥" : ""}
                </li>
                {/* <li>
                    <button onClick={() => setCount(c => ++c)}>{count}</button>
                </li> */}
            </ul>
        </nav>
    )
}