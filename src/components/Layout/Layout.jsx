import styles from "./Layout.module.css"

export const Layout = ({children}) => {
    return (
        <main className={styles.container}>{children}</main>
    )
}