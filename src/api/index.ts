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

export const getPosts = async () => {
  // https://dummyapi.io/data/v1/
  const response = await axios.get('https://dummyapi.io/data/v1/post', {
    headers: {
      'app-id': '65b28c73dc8f890c84ea4e91',
    },
  })
  const { data: dummyApiResponse } = response.data;

  return dummyApiResponse as Post[];
}

export const getUsers = async () => {
  // https://dummyapi.io/data/v1/
  const response = await axios.get('https://dummyapi.io/data/v1/user?limit=10', {
    headers: {
      'app-id': '65b28c73dc8f890c84ea4e91',
    },
  })
  const { data: dummyApiResponse } = response.data;

  return dummyApiResponse;
};

export const getPostsByTag = async (tag: string) => {
  const response = await axios.get(`https://dummyapi.io/data/v1/tag/${tag}/post`, {
    headers: {
      'app-id': '65b28c73dc8f890c84ea4e91',
    },
  })
  const { data: dummyApiResponse } = response.data;

  return dummyApiResponse as Post[];
}
