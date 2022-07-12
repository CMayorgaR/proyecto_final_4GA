const API_URL = "http://127.0.0.1:5000";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user: {
        nombre: "",
        email: "",
        password: "",
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
      saved_meals: {
        name: ""
      },
    },
    actions: {
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

      getMeal:(ruta) => {
        fetch(`http://127.0.0.1:5000${ruta}`)
        .then((res) => res.json())
        .then((data) => setStore({saved_meals:data}))
        .catch((error) => console.log(error));
      }, 

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
      handleChangeRegister: (evento) => {
        //recoje info del formulario
        const { user } = getStore();
        setStore({
          user: {
            //user es un objeto
            ...user, //mantiene todas las propiedades de user.
            [evento.target.name]: evento.target.value, // guardamos las propiedades que le agregamos en el imput del formulario
          },
        });
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
    },
  };
};

export default getState;
