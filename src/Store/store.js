const API_URL = "http://127.0.0.1:5000"

const getState = ({setStore, getActions, getStore}) => {
    return {
        store:{
        starter : {
            "name":"",
            "description":""
        },
        main_dish: {
            "name":"",
            "description":""
        },
        salad: {
            "name":"",
            "description":""
        },
        dessert: {
            "name":"",
            "description":""
        }
        },
        actions:{
        addMeal: (data, evento, send) => {
            evento.preventDefault();
            if (send == true){
                fetch("http://127.0.0.1:5000/starter", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
                }).then((res)=>res.json()).then((data)=>console.log(data)).catch((error)=>console.log(error))}
        },    
        }
    }
}

export default getState;