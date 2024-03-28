import styles from "./SubmitButton.module.css"

function SubimtButton({ text }) {
    return (
        <div>
            <button className={styles.btn}>{text}</button>
        </div>
    )
}

export default SubimtButton