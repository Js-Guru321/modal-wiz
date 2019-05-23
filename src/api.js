let URL = "https://modelwiz-server.herokuapp.com"


if(window.origin.includes("localhost")) {
    URL= "http://localhost:5000"
}

const post = async (url, body) => {
    const token = localStorage.getItem("userToken") || "";
    try {  
        const r =  await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json", "x-access-token": token },
            mode: "cors"
        })
        if(!r.ok) throw new Error("Not OK!")
        const res = await r.json()
        return res

    } catch (e) {
        console.log(e);
        throw e //returning an error to the parent function
    }
}      

const get = async (url) => {
    const token = localStorage.getItem("userToken") || "";
    try {  
        const r = await fetch(url, {
            method: 'GET',
            headers: { "Content-Type": "application/json", "x-access-token": token },
            mode: "cors"
        })
        if(!r.ok) throw new Error("Not OK!")
        const res = await r.json()
        return res
        
    } catch (e) {
        console.log(e);
        throw e //returning an error to the parent function
    }
} 




export {URL, post, get}