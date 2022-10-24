const useLogout = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');

  const authLogout = async () => {
    try {
      await fetch(`${baseURL}/api/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  };

  return authLogout;
};

export default useLogout;
