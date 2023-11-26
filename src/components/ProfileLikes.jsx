const ProfileLikes = (props) => {
  const name = props.data;

  return <>{name === "true" ? "❤️" : "🖤"}</>;
};

export default ProfileLikes;
