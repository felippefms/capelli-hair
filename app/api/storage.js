'use client'
const USER = "user";
const TOKEN = "token";

const StorageService = {
  saveUser: (user) => {
    localStorage.removeItem(USER);
    localStorage.setItem(USER, JSON.stringify(user));
  },

  saveToken: (token) => {
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, token);
  },

  getToken: () => {
    return localStorage.getItem(TOKEN);
  },

  getUser: () => {
    const userJSON = localStorage.getItem(USER);
    return userJSON && JSON.parse(userJSON);
  },

  hasToken: () => {
    return !!localStorage.getItem(TOKEN);
  },

  getUserRole: () => {
    const user = StorageService.getUser();
    return user && user.role;
  },

  isAdminLoggedIn: () => {
    return StorageService.getToken() && StorageService.getUserRole() === 'ADMIN';
  },

  isUserLoggedIn: () => {
    return StorageService.getToken() && StorageService.getUserRole() === 'USER';
  },

  logout: () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
  },
};

export default StorageService;