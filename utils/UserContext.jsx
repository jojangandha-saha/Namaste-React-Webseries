/*Global kind of object in react
This context holds the data of user log in information
that can be used inside any components inside app from anywhere
*/

import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default user",
});

export default UserContext;
