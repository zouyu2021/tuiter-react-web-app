import React from "react";
import dateFormat from "dateformat";

import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
const fetchProfile = (state) => state.profile;
const ProfileComponent = () => {
    const profile = useSelector(fetchProfile);
    const date_obj = new Date(profile.dateOfBirth);
    const dob = new Date(date_obj.getTime() + date_obj.getTimezoneOffset() * 60000);
    const formattedDateJoined = dateFormat(dob, "mmmm dd, yyyy")

    return (
        <div className="mt-2 border border-light">
            <div className="d-flex flex-row align-items-center">
                <div className="me-5">
                    <Link to={'/tuiter'}>
                        <i className="ps-3 fas fa-arrow-left"/>
                    </Link>
                </div>
                <div>
                    <div className="fw-bolder">
                        <span style={{fontSize: 20}}>{profile.firstName} {profile.lastName}</span>
                    </div>
                    <div className="text-secondary">
                        {profile.tweetsCount} Tweets
                    </div>
                </div>
            </div>
            <div>
                <img className="w-100"
                     src={`/images/${profile.bannerPicture}`}
                     alt={profile.handle}/>
            </div>

            <div className="ps-3 pe-3">
                <div className="d-flex flex-row justify-content-between align-items-center">
                    <div>
                        <img
                            className="rounded-circle border border-5 border-light"
                            src={`/images/${profile.profilePicture}`}
                            alt={profile.handle}
                            style={{width: "40%",
                                marginTop: "-20%"}}
                        />
                    </div>
                    <div>
                        <Link to={'/tuiter/edit-profile'}>
                            <button
                                className="btn btn-outline-dark btn-block rounded-pill fw-bold">Edit profile</button>
                        </Link>
                    </div>
                </div>
                <div className="fw-bolder" style={{fontSize: 20}}>{profile.firstName} {profile.lastName}</div>
                <p className="text-secondary">{profile.handle}</p>
                <p>
                    {profile.bio}&nbsp;
                    <a href={profile.website}>{profile.website}</a>
                </p>
                <div className="d-flex flex-row mb-3">
                    <div className="text-secondary me-2"><i className="fas fa-map-marker-alt"></i> {profile.location}</div>
                    <div className="text-secondary me-2">
                        <i className="fas fa-golf-ball"></i> Born {formattedDateJoined}
                    </div>
                    <div className="text-secondary me-2"><i className="far fa-calendar-alt"></i> Joined {profile.dateJoined}</div>
                </div>
                <div className="d-flex flex-row">
                    <div className="me-2">
                        <strong>{profile.followingCount}</strong>
                        <span className="text-secondary"> Following</span>
                    </div>
                    <div>
                        <strong>{profile.followersCount}</strong>
                        <span className="text-secondary"> Followers</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileComponent;