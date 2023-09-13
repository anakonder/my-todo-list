import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskFRorm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/Tasklist";

function App() {
  return (
    <Layout>
        <AppBar/>
        <TaskFRorm/>
        <TaskList/>
    </Layout>
  );
}

export default App;
