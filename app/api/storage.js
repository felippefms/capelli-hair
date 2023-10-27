'use client'

import Cookies from "js-cookie";

const StorageService = {
  saveUser: (user) => {
    Cookies.remove('user');
    Cookies.set('user', user);
  },
  
  saveToken: (token) => {
    Cookies.remove('token');
    Cookies.set('token', token);
  },
  
  getToken: () => {
    return Cookies.get('token');
  },

  getUser: () => {
    return Cookies.get('user');
  },

  hasToken: () => {
    return !!Cookies.get('token');
  },

  getUserRole: () => {
    const user = StorageService.getUser();
    return user;
  },

  isAdminLoggedIn: () => {
    return StorageService.getToken() && StorageService.getUserRole() === 'ADMIN';
  },

  isUserLoggedIn: () => {
    return StorageService.getToken() && StorageService.getUserRole() === 'USER';
  },

  logout: () => {
    Cookies.remove('token');
    Cookies.remove('user');
  },
};

export default StorageService;