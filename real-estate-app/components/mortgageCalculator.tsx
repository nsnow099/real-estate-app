import styles from '@/styles/MortgageCalculator.module.css'

const MortgageCalculator = () => {
    return (
        <div className={styles.formArea}>
            <div className={styles.form}>
                <div>
                    <label htmlFor="price" className={styles.label}>Price</label>
                    $<input type="number" name="price" className={styles.input}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor="down payment" className={styles.label}>Down payment</label>
                    $<input type="number" name="down payment" className={styles.input}></input>
                </div>
                <br/>
                <div style={{borderTop:'1px solid', width:'100%', paddingTop:'20px'}}>
                    <label className={styles.label}>CMHC insurance</label>
                    <div style={{color:'#307db7', fontWeight:'600'}}>$00,000</div>
                </div>
                <br/>
                <div>
                    <label className={styles.label}>Total Mortgage</label>
                    <div style={{color:'#307db7', fontWeight:'600'}}>$000,000</div>
                </div>
                <br/>
                <div style={{borderTop:'1px solid', width:'100%', paddingTop:'0px'}}>
                    
                </div>
                <br/>
                <div>
                    <label htmlFor="amortization" className={styles.label}>Amortization years</label>
                    <input type="number" name="amortization" className={styles.input}></input>
                </div>
                <br/>
                <div>
                    <label htmlFor="rate" className={styles.label}>Mortgage rate</label>
                    <input type="number" name="rate" className={styles.input}></input>%
                </div>
                <br/>
                <div>
                    <label htmlFor="frequency" className={styles.label}>Payment frequency</label>
                    <select name='frequency' style={{width:'150px'}} className={styles.input}>
                        <option>Monthly</option>
                        <option>Weekly</option>
                        <option>Bi-weekly</option>
                        <option>Semi-monthly</option>
                        <option>Quarterly</option>
                        <option>Annually</option>
                    </select>
                </div>
                <br/>
                <div style={{borderTop:'1px solid', width:'100%', paddingTop:'20px'}}>
                    <label className={styles.label}>Mortgage payment</label>
                    <div style={{color:'#307db7', fontWeight:'600'}}>$0,000</div>
                </div>
            </div>
        </div>
    );
}

export default MortgageCalculator;