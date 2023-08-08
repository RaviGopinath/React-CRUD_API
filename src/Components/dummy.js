<div className="card" style={{width:300, height:'auto'}}>
<div class="modal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <form>
        <div class="modal-body">
          <h3>Create new user</h3>

          <div className="col-12">
            <input type="text" placeholder="First name"></input>
            <input type="text" placeholder="Last name"></input>
          </div>

          <div className="col-12">
            <input type="email" placeholder="Email"></input>
          </div>

          <div className="col-12">
            <select name="country">
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Switzerland</option>
            </select>

            <select name="city">
              <option>Chennai</option>
              <option>california</option>
              <option>London</option>
              <option>Bern</option>
            </select>
          </div>

          <div className="col-12">
            <input type="date" placeholder="Date of birth"></input>
            <select name="Gender">
              <option>Male</option>
              <option>Female</option>
              <option>Unknown</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Create User
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>