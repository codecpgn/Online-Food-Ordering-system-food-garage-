// import FacebookIcon from '@mui/icons-material/Facebook';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

import styles from '../styles/Footer.module.css'
import Image from "next/image"


const Footer = () => {

    const d = new Date();
    const text = d.getFullYear();

    
    return (
        <div className={styles.fcontainer}>
         {/* left */}
         <div className={styles.fitem}>
          

          <Image src="/images/footerside.png" objectFit='cointain'  layout='fill' alt=''className='imges' />
          
         
         
</div>

              

              {/* right */}
         <div className={styles.fitem}>

         <div className={styles.cards}>

         <div className={styles.card}>
         <h1 className={styles.texth1}> FOODGARAGE</h1>
         <p className={styles.texth2} >About Us</p>
         <p className={styles.texth2} >Available Areas</p>
         <p className={styles.texth2} >Delivery Charges</p>
         <p className={styles.texth2} >Blog</p>      
         </div>




         <div className={styles.card}>
         <h1 className={styles.texth1}> GET HELP</h1>
         <p className={styles.texth2} >How to Order?</p>
         <p className={styles.texth2} >FAQs</p>
         <p className={styles.texth2} >Contact Us</p>
         <p className={styles.texth2} >Help desk </p>
         </div>


         <div className={styles.card}>
         <h1 className={styles.texth1}>   CALL US</h1>
         <p className={styles.texth2} >Pokhara: 9802859990</p>
         <p className={styles.texth2} > butwal:9843111113</p>
         <p className={styles.texth2} > kathmandu:9862240866</p>
         <p className={styles.texth2} > chitwan:9862556096</p>
         

         </div>


         {/* //download */}
         <div className={styles.card}>
         <div className="download">
         <h1 className={styles.texth1}> Download App</h1>
       
         <p   className={styles.texth2}>playstore</p>
         <h4  className={styles.texth2}>Appsore</h4>
         <p   className={styles.texth2}>connected with us</p>
         </div>


         <div className={styles.social}>
         

        <p className={styles.texth2}>Social media</p>


         </div>

        

       
        
         





         </div>

         <div>

         </div>
         
         </div>

         <div className={styles.under}>
         <hr  className={styles.hr} />

         <ul className={styles.ulitem}>

             <li className={styles.list}>Terms of Usage | Privacy Policy</li>
             <li className={styles.list}>© {text} FoodGARAGE Pvt. Ltd. All Rights Reserved</li>
         </ul>


         <ul className={styles.ulitem2}>

             <li  className={styles.list1}> ||powered by ||| ITGARAGE </li>
         </ul>
        
           </div>
        </div>
        
        </div>
    );
}

export default Footer;