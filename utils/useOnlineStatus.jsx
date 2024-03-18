//How to write a custom hook the easy way
/**
 * Finalize the contract
 * what is input & output of the custom hooks
 */
//don't need information from the caller. from teh component
//from where it has been called
import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //check if online
  //add event listener once in the page and return status
  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);
  //boolean value
  return onlineStatus;
};

export default useOnlineStatus;
