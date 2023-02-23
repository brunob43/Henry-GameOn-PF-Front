import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Profile.module.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className={style.profile}>
        <img className={style.img} src={user.picture} alt={user.name} />
        <h2 className={style.name}>{user.name}</h2>
        <p className={style.email}>{user.email}</p>
      </div>
    )
  );
};

export default Profile;