export const getData = async(url:RequestInfo) => {
    const res = await fetch(url)
    return await res.json()
}