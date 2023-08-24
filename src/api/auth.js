export const userSignUP = async (user) => {
  const url = process.env.REACT_APP_REGISTER;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "content-type": "application/json" },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error(
    data && (data.message || (data.msg = "Dublicate Email or Username")),
  );
};

export const userSignIn = async (user) => {
  const url = process.env.REACT_APP_LOGIN;
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "content-type": "application/json" },
  });
  const data = await response.json();
  if (response.ok) {
    return data;
  }
  throw new Error(data && (data.message || data.msg));
};
