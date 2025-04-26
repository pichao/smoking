import styles from  './index.module.scss'
import brands from '@/assets/data/brand'
import smokings from '@/assets/data/smokings'
import contacts from '@/assets/data/contact'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import ClipboardJS from 'clipboard'
import { useEffect } from 'react';
const Index = ()=>{
    console.log(brands,'nnnnnnnnnnnnn')

    useEffect(()=>{
        var clipboard = new ClipboardJS('.copy');
        console.log(clipboard,'nnnnnnnnnnnnn')

        clipboard.on('success', function (e) {
          console.info('Action:', e.action);
          console.info('Text:', e.text);
          console.info('Trigger:', e.trigger);
        
          e.clearSelection();
        });


    },[])
    return <div className={styles.container}>
        
        <div className={styles.title}>
            <div className={styles.text}>吉隆坡香烟24小时配送</div>
           
           <div className={styles.search}>
                <img src={require('@/assets/sobox-icon.png')} alt="search-icon" className={styles.searchIcon}/>
                <input placeholder="香烟搜索" className={styles.searchInput}/>

           </div>
                
        </div>
        <div className={styles.buyWays}>
            <div className={styles.text}>购买方式联系方式</div>
            <div className={styles.contacts}>
                {contacts.map((o:any,index:number)=><div key={index} className={styles.contactItem}>
                    <img className={styles.icon} src={o.url} alt={o.name} />
                    <div className={`${styles.accountCon} copy`}>
                        <span className={styles.account}>{o.account}</span>
                        <span className={styles.copy}>复制</span>
                        {/* <img className={styles.copyIcon} src={require('@/assets/copy.png')} alt="copy" /> */}
                        </div>
                </div>)}
               
            </div>
        </div>
        <div className={styles.content}>
            {/* <div className={styles.brandCon}>
            <div className={styles.brandTitle}>热门品牌</div>
            <div className={styles.brandContent}>
                {brands.map((item:any,index:number)=> <NavLink className={styles.brandLink} key={index} to={`/${item.enName}`}>
                    <img className={styles.brandImg} alt='香烟品牌' src={item.brandUrl} />
                </NavLink> )}
            </div>

            </div> */}
            <div className={styles.hotSmokeCon}>
                <div className={styles.hotSmokeTitle}>热门香烟</div>
                <div className={styles.hotSmokeContent}>

                    {smokings.map((item:any,index:number)=><div key={index} className={styles.hotSmokeItem}>
                        <img src={item.smokingUrl} alt="" className={styles.smokingImg}/>
                        <div className={styles.smokingInfo}>
                            <div className={styles.name}>{item.name}</div>
                            <div className={styles.des}>焦油含量：<span>{item.des}</span></div>
                            <div className={styles.price}>售卖价格：<span>{item.price}</span></div>
                        </div>

                    </div>)}
                    


                </div>

            </div>

        </div>
        </div>
}
export default Index