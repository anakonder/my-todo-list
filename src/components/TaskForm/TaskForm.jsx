import { Button } from "../Button/Button"
import styles from "./TaskForm.module.css"

export const TaskForm = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const formValue = event.target;
        console.log(formValue.elements.text.value); //тут має бути діспатч
        formValue.reset();
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <input
                className={styles.field}
                type="text"
                name="text"
                placeholder="Enter task text ..."
            />
            <Button type="submit">Add task</Button>
        </form>
    )
}