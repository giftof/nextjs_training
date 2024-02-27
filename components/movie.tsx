'use client' // following event-listener onClick (by use router)

import Link from 'next/link'
import styles from '../styles/movie.module.css'
import { useRouter } from 'next/navigation'

interface IMoveProps {
    id: string
    title: string
    poster_path: string
}

export default function Movie({id, title, poster_path}: IMoveProps) {
    const path = `/movies/${id}`
    const router = useRouter() // sample of another-way (by use router)
    const onClick = () => {
        router.push(path)
    } // sample of another-way (by use router)
    
    return (
        <div className={styles.movie}>
            <img src={poster_path} alt={title} onClick={onClick}/>
            <Link href={path}>{title}</Link>
        </div>
    )
}
