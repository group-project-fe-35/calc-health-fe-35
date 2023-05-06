import { getActiveUser } from './service.js';
const handleAuthUser = async () => {
  const isLogin = await getActiveUser();
  if (isLogin === null) {
    return window.location.replace('/login.html');
  }

  setTimeout(() => {
    writeUserName(isLogin.nama);
  }, [1000]);
};

const handleLogOut = () => {
  localStorage.removeItem('activeUser');
};

const writeUserName = (name = 'Anon') => {
  const divname = document.getElementById('username');

  divname.innerHTML = `<span class=" ms-lg-5 me-lg-4 btn-success disabled">${name}</span>`;
};
export { handleAuthUser, handleLogOut };