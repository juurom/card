let myData = {
    heartcount: 0,
    job: "Designer",
    name: "Juyeon",
    birth: "2001.01.01",
    bio: "Follow your heart but take your brain with you",
    skills:[
        {
            skillname: "sticking at home",
            skillstat: 6
        },
        {
            skillname: "playing piano",
            skillstat: 3
        },
        {
            skillname: "watching horror movie",
            skillstat: 1
        },
    ]
}

export async function GET({fetch, request}){
    return new Response(JSON.stringify(myData))
}

export async function POST({fetch, request}){
    myData.heartcount += 1;
    return new Response(JSON.stringify(myData.heartcount))
}