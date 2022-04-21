import ReactDOM from "react-dom";
import useFetch from "./useFetch"; //custom hook file

const CustomHook = () => {
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
};
export default CustomHook;
