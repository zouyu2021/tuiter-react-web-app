import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../reducers/profile-reducer";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";


const fetchProfile = (state) => state.profile;
const EditProfile = () => {
    const profile = useSelector(fetchProfile);
    const [userProfile, setUserProfile] = useState(profile);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const saveHandler = () => {
        dispatch(updateProfile(userProfile));
        // editHandler(false);
        navigate("/tuiter/profile");
    }

    const nameChangeHandler = (event) => {
        const name = event.target.value;
        const [firstName, lastName] = name.split(" ");
        setUserProfile({
            ...userProfile,
            firstName: firstName,
            lastName: lastName,
        })
    }

    const bioChangeHandler = (event) => {
        setUserProfile({
            ...userProfile,
            bio: event.target.value,
        })
    }

    const locationChangeHandler = (event) => {
        setUserProfile({
            ...userProfile,
            location: event.target.value,
        })
    }

    const websiteChangeHandler = (event) => {
        setUserProfile({
            ...userProfile,
            website: event.target.value,
        })
    }

    const dobChangeHandler = (event) => {
        setUserProfile({
            ...userProfile,
            dateOfBirth: event.target.value,
        })
    }



    return (
        <div className="mt-2 border border-light">
            <div className="d-flex flex-row align-items-center mt-2 mb-2">
                <div className="me-5">
                    <Link to={'/tuiter/profile'}>
                        <i className="ps-3 fas fa-times"/>
                    </Link>
                </div>
                <div>
                    <div className="fw-bolder">
                        <span style={{fontSize: 20}}>Edit profile</span>
                    </div>
                </div>
                <div className="ms-auto">
                    <button
                        className="btn btn-block rounded-pill"
                        onClick={saveHandler}
                        style={{
                            backgroundColor: "white",
                            color: "black",
                            fontWeight: "bold",
                        }}
                    >Save</button>
                </div>
            </div>
            <div>
                <img className="w-100"
                     src={`/images/${userProfile.bannerPicture}`}
                     alt={userProfile.handle}/>
            </div>
            <div className="ps-3 pe-3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                        <img
                            className="rounded-circle border border-5 border-light"
                            src={`/images/${userProfile.profilePicture}`}
                            alt={userProfile.handle}
                            style={{width: "40%",
                                marginTop: "-20%"}}
                        />
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input
                        onChange={nameChangeHandler}
                        type="text"
                        className="form-control border border-dark"
                        id="name"
                        value={userProfile.firstName + " " + userProfile.lastName}
                    />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        onChange={bioChangeHandler}
                        className="form-control border border-dark"
                        id="bio"
                        value={userProfile.bio}
                        style={{height: "100px"}}
                    />
                    <label htmlFor="bio">Bio</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        onChange={locationChangeHandler}
                        type="text"
                        className="form-control border border-dark"
                        id="location"
                        value={userProfile.location}
                    />
                    <label htmlFor="location">Location</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        onChange={websiteChangeHandler}
                        type="text"
                        className="form-control border border-dark"
                        id="website"
                        value={userProfile.website}
                    />
                    <label htmlFor="website">Website</label>
                </div>
                <div className="form-floating">
                    <input
                        onChange={dobChangeHandler} // change isEditingBirthdate true
                        type="date" // not a date type
                        className="form-control"

                        id="dob"
                        value={userProfile.dateOfBirth}
                    />

                    <label htmlFor="dob">Birth date</label>
                </div>
            </div>
        </div>
    )
}
export default EditProfile;