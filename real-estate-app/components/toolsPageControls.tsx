import styles from "@/styles/ToolsPageControls.module.css";

const ToolsPageControls = ({display, setDisplay}:any) => {

    return (
        <div className={styles.controls}>
            <button className={display==='news' ? styles.leftButtonActive : styles.leftButtonInactive} onClick={() => setDisplay('news')}>
                News
            </button>
            <button className={display==='advice' ? styles.middleButtonActive : styles.middleButtonInactive} onClick={() => setDisplay('advice')}>
                Advice
            </button>
            <button className={display==='trends' ? styles.middleButtonActive : styles.middleButtonInactive} onClick={() => setDisplay('trends')}>
                Market Trends
            </button>
            <button className={display==='calculator' ? styles.rightButtonActive : styles.rightButtonInactive} onClick={() => setDisplay('calculator')}>
                Mortgage Calculator
            </button>
        </div>
    )
}

export default ToolsPageControls;