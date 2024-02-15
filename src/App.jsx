import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  function notify() {
    toast("I am react-toastify");
  }
  return (
    <>
      <button onClick={() => notify()}>Click here</button>
      <ToastContainer
      position="top-right"
      ></ToastContainer>
    </>
  );
}
