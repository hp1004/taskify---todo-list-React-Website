import Header from "@/components/Header";
import TodosLogic from "@/components/TodosLogic";

const Home = () => {
  return (
    // <div className="wrapper"> remove the div
    <div className="todos">
      <Header>
        <h1>Taskify</h1>
        <p>Effortless Tasks, Organized Life - Achieve More!</p>
      </Header>
      <TodosLogic />
    </div>
    // </div>
  );
};
export default Home;
