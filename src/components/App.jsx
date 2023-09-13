import { AppBar } from "./AppBar/AppBar";
import { Layout } from "./Layout/Layout";
import { TaskForm } from "./TaskForm/TaskForm";
import { TaskList } from "./TaskList/Tasklist";

function App() {
  return (
    <Layout>
        <AppBar/>
        <TaskForm/>
        <TaskList/>
    </Layout>
  );
}

export default App;
