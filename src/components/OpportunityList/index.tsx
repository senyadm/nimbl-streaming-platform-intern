import Opportunity from '../Opportunity'
import styles from './OpportunityList.module.scss'
const OpportunityList = () => {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Opportunity />
                <Opportunity />
                <Opportunity />
                <Opportunity />
                <Opportunity />
                <Opportunity />
                <Opportunity />
                <Opportunity />
            </div>
        </main>
    )
}

export default OpportunityList
