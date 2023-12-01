const ProfileLikes = (props) => {
  const name = props.data;

  return <strong>{name === "true" ? "❤️" : "🖤"}</strong>;
};

export default ProfileLikes;
