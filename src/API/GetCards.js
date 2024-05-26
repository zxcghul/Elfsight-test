export function FetchCards(url) {
    const res = fetch(url).then(data =>  data.json())
    return res
}

