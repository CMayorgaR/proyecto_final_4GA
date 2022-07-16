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
    },
    actions: {
      addMeal: (data, send, ruta) => {
        const actions = getActions()
        if (send == true) {
          fetch(ruta, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => actions.getStarters()) //funciona!!!
            .catch((error) => console.log(error));
        }
      },
      getStarters: () => {
        fetch('http://127.0.0.1:5000/starter')
          .then((res) => res.json())
          .then((data) => {setStore({ saved_starters: data })}) //if data is true fetch GET setear la variable de la lista store.saved_starters
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
      /*  getAll: (ruta) => {
         fetch(ruta)
           .then((res) => res.json())
           .then((data) => console.log(data))
           .catch((error) => console.log(error));
       }, */
      /* removeStarter: (id) => {
        fetch('http://127.0.0.1:5000/starter/' + id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then ((res)=> res.json())
        .then(() => {console.log('removed');})
        .catch(error => {console.log(error)});
      }, */
      

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
