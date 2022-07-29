const APIusers = 'http://localhost:8080/create_user'

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
        name: "",
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
      addStarters: (data, send, ruta) => {
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
      addMains: (data, send, ruta) => {
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
            .then((data) => actions.getMains()) //funciona!!!
            .catch((error) => console.log(error));
        }
      },
      addSalads: (data, send, ruta) => {
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
            .then((data) => actions.getSalads()) //funciona!!!
            .catch((error) => console.log(error));
        }
      },
      addDesserts: (data, send, ruta) => {
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
            .then((data) => actions.getDesserts()) //funciona!!!
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
      removeStarter: (id) => {
        const actions = getActions();
        fetch('http://127.0.0.1:5000/starter/' + id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then ((res)=> res.json())
        .then((data) => actions.getStarters())
        .catch(error => {console.log(error)});
      },
      removeMain: (id) => {
        const actions = getActions();
        fetch('http://127.0.0.1:5000/main/' + id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then ((res)=> res.json())
        .then((data) => actions.getMains())
        .catch(error => {console.log(error)});
      },
      removeSalad: (id) => {
        const actions = getActions();
        fetch('http://127.0.0.1:5000/salad/' + id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then ((res)=> res.json())
        .then((data) => actions.getSalads())
        .catch(error => {console.log(error)});
      },
      removeDessert: (id) => {
        const actions = getActions();
        fetch('http://127.0.0.1:5000/dessert/' + id, {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then ((res)=> res.json())
        .then((data) => actions.getDesserts())
        .catch(error => {console.log(error)});
      },
      editStarter: (data, id, e) => {
        e.preventDefault();
        const actions = getActions();
        fetch('http://127.0.0.1:5000/starter/' + id, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/Json'
          },
          body: JSON.stringify(data)
        }).then((res) => { return res.json() })
          .then((data) => actions.getStarters())
          .catch((error) => console.log(error));
      },
      editMain: (data, id, e) => {
        e.preventDefault();
        const actions = getActions();
        fetch('http://127.0.0.1:5000/main/' + id, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/Json'
          },
          body: JSON.stringify(data)
        }).then((res) => { return res.json() })
          .then((data) => actions.getMains())
          .catch((error) => console.log(error));
      },
      editSalad: (data, id, e) => {
        e.preventDefault();
        const actions = getActions();
        fetch('http://127.0.0.1:5000/salad/' + id, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/Json'
          },
          body: JSON.stringify(data)
        }).then((res) => { return res.json() })
          .then((data) => actions.getSalads())
          .catch((error) => console.log(error));
      },
      editDessert: (data, id, e) => {
        e.preventDefault();
        const actions = getActions();
        fetch('http://127.0.0.1:5000/dessert/' + id, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/Json'
          },
          body: JSON.stringify(data)
        }).then((res) => { return res.json() })
          .then((data) => actions.getDesserts())
          .catch((error) => console.log(error));
      },

    }
  }
}       
export default getState;
