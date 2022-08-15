const APIusers = "http://localhost:8080/";

const getState = ({ setStore, getActions, getStore }) => {
  return {
    store: {
      user: {
        full_name: "",
        email: "",
        password: "",
        role_id: "",
      },
      starter: {
        name: "",
        description: "",
        date: "",
      },
      main_dish: {
        name: "",
        description: "",
        date: "",
      },
      salad: {
        name: "",
        description: "",
        date: "",
      },
      dessert: {
        name: "",
        description: "",
        date: "",
      },
      saved_starters: [
        {
          id: "",
          name: "",
          date: "",
        },
      ],
      saved_mains: [
        {
          id: "",
          name: "",
          date: "",
        },
      ],
      saved_salads: [
        {
          id: "",
          name: "",
          date: "",
        },
      ],
      saved_desserts: [
        {
          id: "",
          name: "",
          date: "",
        },
      ],
      saved_date: "",
      selection: {
        date: "",
        user_id: 1,
        starter_id: 0,
        main_id: 0,
        salad_id: 0,
        dessert_id: 0,
      },
      saved_selection: [],
    },
    actions: {
      handleChangeLogin: (evento) => {
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
      handleSubmitLogin: (evento, navigate) => {
        evento.preventDefault();
        localStorage.clear();
        const { user } = getStore(); //traeme el usuario del store
        fetch(APIusers + "login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.access_token) {
              localStorage.setItem("token", data.access_token);
              localStorage.setItem("role_id", data.role_id);
              navigate("/calendar");
            } else {
              localStorage.clear();
            }
          });
        setStore({
          user: {
            full_name: "",
            email: "",
            password: "",
          },
        });
      },

      test: (data, send, ruta) => {
        let token = localStorage.getItem("token");
        console.log(token);
        fetch(APIusers + "me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },

      handleChangeRegister: (evento) => {
        //recoje info del formulario
        const { user } = getStore();
        console.log(evento.target.name);
        setStore({
          user: {
            //user es un objeto
            ...user, //mantiene todas las propiedades de user.
            [evento.target.name]: evento.target.value, // guardamos las propiedades que le agregamos en el imput del formulario
          },
        });
      },
      handleSubmitRegister: (evento, navigate) => {
        const actions = getActions();
        evento.preventDefault(); //evitamos que la pag vuelva a cargar.
        const { user } = getStore(); //traeme el usuario del store
        fetch(APIusers + "create_user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json", //el lenguaje de comunicacion es json
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
        navigate("/");
      },
      handleSelection: (category, id, name, today) => {
        const store = getStore()
        const { selection } = getStore()
        console.log(store.selection)
        const saved_selection = getStore().saved_selection;
        selection[category] = id;
        saved_selection.push(name);
        setStore({
          selection:{
            ...selection,
            date:today
          }
        })
        return selection;
      },
      addStarters: (data, send, ruta) => {
        const actions = getActions();
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
      addMains: (data, send, ruta) => {
        const actions = getActions();
        if (send == true) {
          fetch(ruta, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => actions.getMains()) //funciona!!!
            .catch((error) => console.log(error));
        }
      },
      addSalads: (data, send, ruta) => {
        const actions = getActions();
        if (send == true) {
          fetch(ruta, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => actions.getSalads()) //funciona!!!
            .catch((error) => console.log(error));
        }
      },
      addDesserts: (data, send, ruta) => {
        const actions = getActions();
        if (send == true) {
          fetch(ruta, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((res) => res.json())
            .then((data) => actions.getDesserts()) //funciona!!!
            .catch((error) => console.log(error));
        }
      },
      getStarters: () => {
        fetch(APIusers + "starter")
          .then((res) => res.json())
          .then((data) => {
            setStore({ saved_starters: data });
          }) //if data is true fetch GET setear la variable de la lista store.saved_starters
          .catch((error) => console.log(error));
      },
      getMains: () => {
        fetch(APIusers + "main")
          .then((res) => res.json())
          .then((data) => setStore({ saved_mains: data }))
          .catch((error) => console.log(error));
      },
      getSalads: () => {
        fetch(APIusers + "salad")
          .then((res) => res.json())
          .then((data) => setStore({ saved_salads: data }))
          .catch((error) => console.log(error));
      },
      getDesserts: () => {
        fetch(APIusers + "dessert")
          .then((res) => res.json())
          .then((data) => setStore({ saved_desserts: data }))
          .catch((error) => console.log(error));
      },
      removeStarter: (id) => {
        const store = getStore();
        const actions = getActions();
        fetch(APIusers + "starter/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => actions.getStarters())
          .catch((error) => {
            console.log(error);
          });
      },
      removeMain: (id) => {
        const actions = getActions();
        fetch(APIusers + "main/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => actions.getMains())
          .catch((error) => {
            console.log(error);
          });
      },
      removeSalad: (id) => {
        const actions = getActions();
        fetch(APIusers + "salad/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => actions.getSalads())
          .catch((error) => {
            console.log(error);
          });
      },
      removeDessert: (id) => {
        const actions = getActions();
        fetch(APIusers + "dessert/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => actions.getDesserts())
          .catch((error) => {
            console.log(error);
          });
      },
      editStarter: (data, id, e) => {
        e.preventDefault();
        const store = getStore();
        const actions = getActions();
        fetch(APIusers + "starter/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/Json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => actions.getStarters())
          .catch((error) => console.log(error));
      },
      editMain: (data, id, e) => {
        e.preventDefault();
        const actions = getActions();
        fetch(APIusers + "main/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/Json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => actions.getMains())
          .catch((error) => console.log(error));
      },
      editSalad: (data, id, e) => {
        e.preventDefault();
        const actions = getActions();
        fetch(APIusers + "salad/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/Json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => actions.getSalads())
          .catch((error) => console.log(error));
      },
      editDessert: (data, id, e) => {
        e.preventDefault();
        const actions = getActions();
        fetch(APIusers + "dessert/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/Json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => actions.getDesserts())
          .catch((error) => console.log(error));
      },
      saveDate: (date) => {
        setStore({ saved_date: date });
      },
      addSelection: (data) => {
        fetch(APIusers + "userselection", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
      getSelection: (data, id) => {
        fetch(APIusers + "userselection" + id, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
