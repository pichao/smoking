import styles from  './index.module.scss'
import data from '@/assets/data'
import { NavLink } from "react-router";
const Index = ()=>{
    console.log(data,'nnnnnnnnnnnnn')
    return <div className={styles.container}>
        
        <div className={styles.title}>
            <div className={styles.text}>吉隆坡香烟</div>
           
           <div className={styles.search}>
                <img src={require('@/assets/sobox-icon.png')} alt="search-icon" className={styles.searchIcon}/>
                <input placeholder="香烟搜索" className={styles.searchInput}/>

           </div>
                
        </div>
        <div>
            <div>购买方式</div>
        </div>
        <div className={styles.content}>
            <div className={styles.brandCon}>
            <div className={styles.brandTitle}>热门品牌</div>
            <div className={styles.brandContent}>
                {data.map((item:any,index:number)=> <NavLink className={styles.brandLink} key={index} to={`/${item.enName}`}>
                    <img className={styles.brandImg} alt='香烟品牌' src={item.brandUrl} />
                </NavLink> )}
            </div>

            </div>
            <div className={styles.hotSmokeCon}>
                <div className={styles.hotSmokeTitle}>热门香烟</div>
                <div className={styles.hotSmokeContent}>

                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>

                    <div className={styles.hotSmokeItem}>11111</div>

                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>


                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>
                    <div className={styles.hotSmokeItem}>11111</div>


                </div>

            </div>

        </div>
        </div>
}
export default Index