import { Appwrite, Query } from "appwrite";
import { server } from "./server";

export const api = {
  provider: () => {
    let sdk = new Appwrite();
    sdk.setEndpoint(server.endpoint).setProject(server.project);
    return sdk;
  },
  createAccount: (email, password, name) => {
    return api.provider().account.create("unique()", email, password, name);
  },
  getAccount: () => {
    return api.provider().account.get();
  },
  guestLogin: () => {
    return api.provider().account.createAnonymousSession();
  },
  login: (email, password) => {
    return api.provider().account.createSession(email, password);
  },
  logout: () => {
    return api.provider().account.deleteSession("current");
  },
  createDoc: (collectionId, data, read, write) => {
    return api
      .provider()
      .database.createDocument(collectionId, "unique()", data, read, write);
  },
  updateDoc: (collectionId, documentId, data, read, write) => {
    return api
      .provider()
      .database.updateDocument(collectionId, documentId, data, read, write);
  },
  deleteDoc: (collectionId, documentId) => {
    return api.provider().database.deleteDocument(collectionId, documentId);
  },
  listDoc: (collectionId) => {
    return api.provider().database.listDocuments(collectionId);
  },
  filterDoc: (collectionId) => {
    return api
      .provider()
      .database.listDocuments(collectionId, [Query.equal("veges", "apple")]);
  },
};
