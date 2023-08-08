import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import UserForm from './Components/userForm';
import MyButton from './Components/myButton';
import UserLists from './Components/userList';
import Loader from './Components/loader';

function App() {

  let [showForm, updateShowForm] = useState(false);
  let [userlist, updateList] = useState([]);
  let [loading, updateLoading] = useState(false);
  let [editMode, updateEditMode] = useState(null);
  let [getUser, updateGetUsers] = useState();

  useEffect(()=> {
    fetchUser()
  },[])

  function displayForm(value){
    updateShowForm(value);
    updateEditMode(false);
  }

  function closeForm(value){
    updateShowForm(value);
  }

  function getEditForm(user){
    updateGetUsers(user);
    updateEditMode(true);
    updateShowForm(true);
    console.log(user);
  }

  function onCreateUsers(users){
    // fetch('https://react-crud-operation-4442f-default-rtdb.firebaseio.com/users.json',{
    //   method : 'POST',
    //   body : JSON.stringify(users),
    //   headers : {
    //     'Content-Type' : 'application/json'
    //   }
    // })
    // .then((response) => {
    //   console.log(response);
    // })

    // axios is a thrid party library used to intract with the data base
    // in order to use axios you have to install it (npm install --save axios) 
    if(!editMode){
        axios.post('https://react-crud-operation-4442f-default-rtdb.firebaseio.com/users.json',users)
        .then((response) => {
          fetchUser();
          updateShowForm(false);
          console.log(response);
        })
    }
    else{
      console.log(users);
      console.log(getUser);
      axios.put('https://react-crud-operation-4442f-default-rtdb.firebaseio.com/users/'+ getUser.id +'.json',users)
      .then((response) => {
        console.log(response);
        fetchUser();
        updateShowForm(false);
      })
      .catch((error) =>{
        alert(error.message);
      })
    }
  }

  function fetchUser(){

    // fetch is default GET method. So you don't want specify the method : 'GET'. you can add headers or you can simply leave it
    // it is a get method. So the body also doesn't need to be specified
    // fetch method doesn't throw any error even if there is an error. You have to throw it manually if response is not successful

    // fetch('https://react-crud-operation-4442f-default-rtdb.firebaseio.com/users.json')
    // .then((response) => {
    //   return response.json();
    // })
    // .then((data) => {
    //   let fetchedUsers = [];

    //   for(let key in data){
    //     fetchedUsers.push({...data[key], id : key})
    //   }

    //   updateList(fetchedUsers);
    // })

    updateLoading(true);

    axios.get('https://react-crud-operation-4442f-default-rtdb.firebaseio.com/users.json')
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      let fetchedUsers = [];

      for(let key in data){
        fetchedUsers.push({...data[key], id : key})
      }

      updateList(fetchedUsers);

      setTimeout(() =>{
        updateLoading(false)
      },500)

    })
    .catch((error) =>{
      alert(error.message);
    })
  }

  function onDeleteUser(user){
    let del = window.confirm("Do you really want to delete " + user.firstName +' ' + user.lastName);
    if(del){
      axios.delete('https://react-crud-operation-4442f-default-rtdb.firebaseio.com/users/'+ user.id +'.json')
      .then((response) =>{
        console.log(response);
        fetchUser();
      })
      .catch((error) =>{
        console.log(error);
      })
    }
  }

  return (
    <div className="App">
      <div className="text-end">
          <MyButton clickEventHandler={displayForm}>Add User</MyButton>
          <button className="btn btn-info mt-3" onClick={fetchUser} style={{ marginRight : 100}}> Get User</button>
      </div>
      {showForm && <UserForm App={closeForm} onCreateUser={onCreateUsers} editMode={editMode} getUser={getUser}></UserForm>}
      {!loading && <UserLists users={userlist} App={getEditForm} onDeleteUser={onDeleteUser}></UserLists>}
      { loading && <Loader></Loader>}
    </div>
  );
}

export default App;
