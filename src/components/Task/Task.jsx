import styles from "./Task.module.css"

export const Task = ({ task }) => {


    return (
        <div className={styles.wraper}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={task.complited}
                // onChange={handleTogle}
            />
        </div>
    )
} 