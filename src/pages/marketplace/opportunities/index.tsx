import OpportunityList from '@/components/OpportunityList'
import RecomendationDropdown from '@/components/RecomendationDropdown'
import styles from './Opportunities.module.scss'
import Layout from '@/components/Layout'
const Opportunities = () => {
    return (
        <Layout>
            <main className={styles.container}>
                <article className={styles.mainContainer}>
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                    <RecomendationDropdown />
                </article>
                <OpportunityList />
            </main>
        </Layout>

    )
}

export default Opportunities