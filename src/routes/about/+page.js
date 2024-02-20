export async function load({fetch, request}){
    let res = await fetch('/api')
    let result = await res.json()
    //console.log(result)
    return result;
}