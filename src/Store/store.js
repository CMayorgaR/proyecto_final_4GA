const APIusers = 'http://localhost:8080/create_user'

const getState = ({ setStore, getActions, getStore }) => {

    return {
        store: {
            user: {
                full_name: '',
                email: '',
                password: ''
            },
            starter: {
                name: "",
                description: "",
            },
            main_dish: {
                name: "",
                description: "",
            },
            salad: {
                name: "",
                description: "",
            },
            dessert: {
                name: "",
                description: "",
            },
            saved_starters: [{
                name: ""
            }],
            saved_mains: [{
                name: ""
            }],
            saved_salads: [{
                name: ""
            }],
            saved_desserts: [{
                name: ""
            }],
            saved_user: [{
              id:"",
              email:"",
              roles_id:""
            }]
        },

        actions: {
            // handleChangeLogin: (evento) => { //recoje info del formulario
            //     const {user} = getStore(); 
            //     setStore({
            //         user:{ //user es un objeto
            //             ...user, //mantiene todas las propiedades de user.
            //             [evento.target.name]:evento.target.value // guardamos las propiedades que le agregamos en el imput del formulario
            //         }
            //     })
            // },
            // handleSubmitLogin: (evento) =>{ //
            //     evento.preventDefault(); //evitamos que la pag vuelva a cargar.
            //     const {user} = getStore() //traeme el usuario del store
            //     fetch(APIusers,{
            //         method:"POST",
            //         headers: {
            //             "Content-Type": "application/json" //el lenguaje de comunicacion es json
            //         },
            //         body:JSON.stringify(user)
            //     }).then(res => res.json()).then(data => console.log(data))//convertimos la respuesta de json a js y luego le hacemos un consolelog
            // },
            handleChangeRegister: (evento) => { //recoje info del formulario
                const { user } = getStore();
                console.log(evento.target.name)
                setStore({
                    user: { //user es un objeto
                        ...user, //mantiene todas las propiedades de user.
                        [evento.target.name]: evento.target.value // guardamos las propiedades que le agregamos en el imput del formulario
                    }
                })
            },
            handleSubmitRegister: (evento) => { //
                evento.preventDefault(); //evitamos que la pag vuelva a cargar.
                const { user } = getStore() //traeme el usuario del store
                fetch(APIusers, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" //el lenguaje de comunicacion es json
                    },
                    body: JSON.stringify(user)
                }).then(res => res.json()).then(data => console.log(data))//convertimos la respuesta de json a js y luego le hacemos un consolelog
            },

            addMeal: (data, send, ruta) => {
                if (send == true) {
                    fetch(ruta, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(data),
                    })
                        .then((res) => res.json())
                        .then((data) => console.log(data))
                        .catch((error) => console.log(error));
                }
            },
            getStarters: () => {
                fetch('http://127.0.0.1:5000/starter')
                    .then((res) => res.json())
                    .then((data) => setStore({ saved_starters: data }))
                    .catch((error) => console.log(error));
            },
            getMains: () => {
                fetch('http://127.0.0.1:5000/main')
                    .then((res) => res.json())
                    .then((data) => setStore({ saved_mains: data }))
                    .catch((error) => console.log(error));
            },
            getSalads: () => {
                fetch('http://127.0.0.1:5000/salad')
                    .then((res) => res.json())
                    .then((data) => setStore({ saved_salads: data }))
                    .catch((error) => console.log(error));
            },
            getDesserts: () => {
                fetch('http://127.0.0.1:5000/dessert')
                    .then((res) => res.json())
                    .then((data) => setStore({ saved_desserts: data }))
                    .catch((error) => console.log(error));
            },
            getUser: () => {
              fetch('http://localhost:8080/get_user_roles')
                .then((res) => res.json())
                .then((data) => setStore({ saved_user: data }))
                .catch((error) => console.log(error));
            }
        }
    }
}

export default getState;
