handleInputChangeBind = e => {
  e.preventDefault();
  const key = e.target.name;
  const value = e.target.value;
  this.setState({ [key]: value });
};
