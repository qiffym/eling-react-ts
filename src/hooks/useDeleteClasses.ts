/* eslint-disable no-console */

const useDeleteMaterial = (url: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');

  const deleteMaterial = async (id: number) => {
    try {
      const response = await fetch(`${baseURL}${url}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return deleteMaterial;
};

export default useDeleteMaterial;
