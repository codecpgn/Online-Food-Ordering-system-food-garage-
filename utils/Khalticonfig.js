import mykey from './Khaltikey';
 import axios from 'axios';
 let config = {
  // replace this key with yours
  "publicKey": mykey.publicTestKey,
  "productIdentity": "1234567890",
  "productName": "foodgarage",
  "productUrl": "http://localhost:3000",
  "eventHandler": {
      onSuccess (payload) {
          // hit merchant api for initiating verfication
          console.log(payload);
          let data = {
            token: payload.token,
        amount: payload.amount,
        };
        
       
        axios
        .get(
          `https://meslaforum.herokuapp.com/khalti/${data.token}/${data.amount}/${"test_secret_key_2cc9a6775ea84c2682b49c0a67214c3a"}`
        )
            .then(response => {
                console.log(response.data);
             alert("succesfully paying")
              })
            .catch(error => {
                console.log(error);
            });
      },
      // onError handler is optional
      onError (error) {
          // handle errors
          console.log(error);
      },
      onClose () {
          console.log('widget is closing');
      }
  },
  "paymentPreference": ["KHALTI", "EBANKING","MOBILE_BANKING", "CONNECT_IPS", "SCT"],
};
export default config;
