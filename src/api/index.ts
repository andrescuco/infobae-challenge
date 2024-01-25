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
  const { data } = response.data;

  return data as Post[];
}
