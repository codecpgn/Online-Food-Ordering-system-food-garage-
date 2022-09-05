import styles from "../styles/Featured.module.css";
import Image from "next/image";

import React,{useState}from 'react'



const Featured = () => {


  const [index, setindex] = useState(0);

  

  const onclickarrow=(action) => {
  

     if(action==="l"){
       console.log("click left")

       setindex(index!==0?index-1:2)
     }


     

     if(action==="r"){
      console.log("click left")

      setindex(index!==2?index+1:0)
    }
  }
 
  const images = [
    "/images/featured.png",     //0     -3
    "/images/featured2.png",    //1    -2
    "/images/featured3.png",     // 2  -1
  ];


  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer } style={{ left: 0 }}  onClick={()=>onclickarrow("l")} >
        <Image src="/images/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>


      <div className={styles.wrapper} style={{transform: `translateX(${-100*index}vw)` }} >
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>

      <div className={styles.arrowContainer} style={{ right: 0 }}   onClick={()=>onclickarrow("r")}>
        <Image src="/images/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div>
    </div>
  );
};

export default Featured;