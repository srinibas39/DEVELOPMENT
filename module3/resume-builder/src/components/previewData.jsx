import ResumePreview from "./resumePreview";
import "./css/previewData.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { detailsCreator } from "../redux/action";

let PreviewData = () => {

    let dispatch=useDispatch();
    let details=useSelector(state=>state.details)
    console.log(details)
  return (
    <>
      <div className="previewData">
        <div className="form">
          <h3 >Personal Details</h3>
          <div className="row mt-2">
            <div className="col-2"></div>
            <div className="col-8">
              <form>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    onChange={(e)=>{
                       dispatch(detailsCreator({email:e.currentTarget.value}))
                    }}
                    value={details.email}
                    placeholder="Email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input
                    onChange={(e)=>{
                        dispatch(detailsCreator({password:e.currentTarget.value}))
                    }}
                    value={details.password}
                    placeholder="password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    First Name
                  </label>
                  <input
                     onChange={(e)=>{
                        dispatch(detailsCreator({fname:e.currentTarget.value}))
                    }}
                    value={details.fname}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="First Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Last Name
                  </label>
                  <input
                     onChange={(e)=>{
                        dispatch(detailsCreator({lname:e.currentTarget.value}))
                    }}
                    value={details.lname}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Last Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    Phone number
                  </label>
                  <input
                     onChange={(e)=>{
                        dispatch(detailsCreator({phn:e.currentTarget.value}))
                    }}
                    value={details.phn}
                    type="number"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Phone number"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleInputPassword1" class="form-label">
                    State
                  </label>
                  <input
                     onChange={(e)=>{
                        dispatch(detailsCreator({state:e.currentTarget.value}))
                    }}
                    value={details.state}
                    type="text"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="State"
                  />
                </div>

                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <ResumePreview />
      </div>
    </>
  );
};

export default PreviewData;
