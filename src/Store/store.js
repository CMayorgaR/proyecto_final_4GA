// const APIusers = 

const getState = ({setStore, getActions, getStore}) => {

    return {
        store:{
            user:{
                nombre:'',
                email: '',
                password:''
            }
        },
        actions:{
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
                const {user} = getStore(); 
                setStore({
                    user:{ //user es un objeto
                        ...user, //mantiene todas las propiedades de user.
                        [evento.target.name]:evento.target.value // guardamos las propiedades que le agregamos en el imput del formulario
                    }
                })
            },
            // handleSubmitRegister: (evento) =>{ //
            //     evento.preventDefault(); //evitamos que la pag vuelva a cargar.
            //     const {user} = getStore() //traeme el usuario del store
            //     fetch(APIusers,{
            //         method:"POST",
            //         headers: {
            //             "Content-Type": "application/json" //el lenguaje de comunicacion es json
            //         },
            //         body:JSON.stringify(user)
            //     }).then(res => res.json()).then(data => console.log(data))//convertimos la respuesta de json a js y luego le hacemos un consolelog
            // }
        }
    }
}
export default getState;