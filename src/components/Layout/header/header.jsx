import styles from "./Header.module.css"

const Header = () => {
    return (
        <div className={styles.header}>
            <h3>Logo</h3>
            <ul>
                <li>Home</li>
                <li>Task List</li>
            </ul>
        </div>
    )
}


export default Header;