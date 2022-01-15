const changeTheme = (boolean) => {
  if (boolean) {
    return { type: false };
  }
  return { type: true };
};

export default changeTheme;
