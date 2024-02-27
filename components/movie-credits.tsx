import { API_MOVIE_LIST } from '../app/api-path'

async function getCredits(id: string) {
    // await new Promise(resolve => setTimeout(resolve, 1000))
    const response = await fetch(`${API_MOVIE_LIST}/${id}/credits`)
    const json = await response.json()
    return json
}

export default async function MovieCredits({id}: {id: string}) {
    const video = await getCredits(id)
    return (
        <h5>{JSON.stringify(video)}</h5>
    )
}
