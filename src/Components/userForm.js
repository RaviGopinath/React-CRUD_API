import React,{useRef} from "react";


function UserForm(props) {

    function removeForm(){
        props.App(false);
    }

    let Fname = useRef();
    let Lname = useRef();
    let Email = useRef();
    let Password = useRef();
    let Country = useRef();
    let City = useRef();
    let Date = useRef();
    let Gender = useRef();

    function onCreateUser(event){
      event.preventDefault();

      let User = {
        firstName : Fname.current.value,
        lastName : Lname.current.value,
        email : Email.current.value,
        password : Password.current.value,
        country : Country.current.value,
        city : City.current.value,
        dob : Date.current.value,
        gender : Gender.current.value 
      }

      console.log(User);
      props.onCreateUser(User);
    }

  return (
    <React.Fragment>
        <div className="card mx-auto mt-3" style={{width : 500, boxShadow : '10px 10px 10px #dedede'}}>

        <form onSubmit={onCreateUser}>
        <div class="mx-auto">
          <h3>{props.editMode ? 'Update User Details' : 'Create new user'}</h3>

          <input type="text" style={{width : '85%', marginLeft : 30}}  class="form-control mt-3" placeholder="First name" aria-label="Username" aria-describedby="basic-addon1" ref={Fname} defaultValue={props.editMode ? props.getUser.firstName : ''}></input>
          <input type="text" style={{width : '85%', marginLeft : 30}} class="form-control mt-3" placeholder="Last name" aria-label="Username" aria-describedby="basic-addon1" ref={Lname} defaultValue={props.editMode ? props.getUser.lastName : ''}></input> <br></br>

          <input type="text" style={{width : '85%', marginLeft : 30}} class="form-control mt-1" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" ref={Email} defaultValue={props.editMode ? props.getUser.email : ''}></input>

            <div class="input-group mb-3" style={{width : '90%'}}>
                <input type="password" style={{marginLeft : '8%', width : '40%'}}  class="form-control mt-3" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" ref={Password} defaultValue={props.editMode ? props.getUser.password : ''}></input>
                <input type="password" style={{ width : '40%', marginLeft : 20}} class="form-control mt-3" placeholder="Confirm Password" aria-label="Username" aria-describedby="basic-addon1" defaultValue={props.editMode ? props.getUser.password : ''}></input>
            </div>

        
            <div class="input-group mb-3" style={{width : '90%'}}>
            <select class="form-select" aria-label="Default select example" name="country" style={{marginLeft : '8%', width : '40%'}} ref={Country} defaultValue={props.editMode ? props.getUser.country : ''}>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Switzerland</option>
            </select>

            <select class="form-select" aria-label="Default select example" name="city" style={{ width : '40%', marginLeft : 20}} ref={City} defaultValue={props.editMode ? props.getUser.city : ''}>
                <option>Chennai</option>
                <option>california</option>
                <option>London</option>
                <option>Bern</option>
            </select>
            </div>

            <div class="input-group mb-3" style={{width : '90%'}}>
                <input type="date" style={{marginLeft : '8%', width : '40%'}}  class="form-control mt-3" placeholder="Password" aria-label="Username" aria-describedby="basic-addon1" ref={Date} defaultValue={props.editMode ? props.getUser.dob : ''}></input>
                

                <select class="form-select mt-3" aria-label="Default select example" name="Gender" style={{ width : '40%', marginLeft : 20, height : 40}} ref={Gender} defaultValue={props.editMode ? props.getUser.gender : ''}>
                <option>Male</option>
                <option>Female</option>
                <option>Unknown</option>
                </select>

            </div>

        </div>
        <div class="mx-auto mt-5 mb-3">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={removeForm}
          >
            Close
          </button>
          <button type="submit" class="btn btn-primary" style={{marginLeft : 20}}>
            {props.editMode ? 'Update User' : 'Create User'}
          </button>
        </div>
      </form>

        </div>
    </React.Fragment>
  );
}

export default UserForm