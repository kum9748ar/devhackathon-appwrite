import {api} from "./appwrite";
import { server } from "./server";
export const getTodos = async () => {
  try {
    const res = await api.listDoc(server.collectionId);
    return res.documents;
  } catch (err) {
    console.log(err);
  }
};
export const getAuthState = async ()=>{
    
}
