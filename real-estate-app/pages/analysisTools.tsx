import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import pageStyles from "@/styles/AnalysisTools.module.css";
import styles from "@/styles/Home.module.css";
import ToolsPageControls from "@/components/toolsPageControls";

const AnalysisTools = () => {
    const router = useRouter();
    const { view } = router.query;

    const [display, setDisplay] = useState("news");

    useEffect(() => {
        if (view === "news") {
            setDisplay("news");
        } else if (view === "advice") {
            setDisplay("advice");
        } else if (view === "trends") {
            setDisplay("trends");
        } else if (view === "calculator") {
            setDisplay("calculator");
        }
    }, [view]);

    return (
        <div>
            <div style={{ height: '60px' }}>
                {/* header component */}
            </div>
            <main className={styles.main}>
                <ToolsPageControls display={display} setDisplay={setDisplay}></ToolsPageControls>
            </main>
        </div>
    )
}

export default AnalysisTools;