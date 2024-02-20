export async function load({fetch, request}){
    let res = await fetch('http://localhost:5173/api')
    let result = await res.json()
    //console.log(result)
    return result;
}