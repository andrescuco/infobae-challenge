// Use later for Firebase NoSQL
// import {
//   doc,
//   collection,
//   Firestore,
//   getDocs,
//   updateDoc,
//   increment,
//   query,
//   where,
// } from 'firebase/firestore';
import axios from 'axios'

import { Post } from '../types/post';

/**
 * Gets all posts from the api.
 */
export const getPosts = async () => {
  const response = await axios.get('https://dummyapi.io/data/v1/post', {
    headers: {
      'app-id': '65b28c73dc8f890c84ea4e91',
    },
  })
  const { data: dummyApiResponseData } = response.data;

  return dummyApiResponseData as Post[];
}

/**
 * Gets all posts which have the given tag from the api.
 */
export const getPostsByTag = async (tag: string) => {
  const response = await axios.get(`https://dummyapi.io/data/v1/tag/${tag}/post`, {
    headers: {
      'app-id': '65b28c73dc8f890c84ea4e91',
    },
  })
  const { data: dummyApiResponseData } = response.data;

  return dummyApiResponseData as Post[];
}

/**
 * Gets all users from the api, requires the user to be logged in.
 */
export const getUsers = async () => {
  const response = await axios.get('https://dummyapi.io/data/v1/user?limit=10', {
    headers: {
      'app-id': '65b28c73dc8f890c84ea4e91',
    },
  })
  const { data: dummyApiResponseData } = response.data;

  return dummyApiResponseData;
};
