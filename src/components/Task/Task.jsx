import styles from "./Task.module.css"

export const Task = ({task}) => {
    
    const handleDelete = () => console.log(handleDelete)

    const handleToggle = () => console.log(handleToggle)

    return (
        <div className={styles.wraper}>
            <input
                className={styles.checkbox} 
                type="checkbox"
                checked={task.completed}
                onChange={handleToggle}
            />
            <p className={styles.text}>{task.text}</p>
            <button className={styles.btn} onClick={handleDelete}>
                <mdClose size={24} />
            </button>
        </div>
    )
}