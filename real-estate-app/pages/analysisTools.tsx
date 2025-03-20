import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import pageStyles from "@/styles/AnalysisTools.module.css";
import styles from "@/styles/Home.module.css";
import ToolsPageControls from "@/components/toolsPageControls";
import MortgageCalculator from "@/components/mortgageCalculator";

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
                <br/>
                <div style={{backgroundColor:'white', width:'100%', height:'420px'}}>
                    <div style={display === 'news' ? {display:'block'} : {display:'none'}}>
                        Relevant news would display here
                    </div>
                    <div style={display === 'advice' ? {display:'block'} : {display:'none'}}>
                        Buying and selling tips would display here
                    </div>
                    <div style={display === 'trends' ? {display:'block'} : {display:'none'}}>
                        Current market trends analysis would display here
                    </div>
                    <div style={display === 'calculator' ? {display:'block'} : {display:'none'}}>
                        <MortgageCalculator></MortgageCalculator>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AnalysisTools;