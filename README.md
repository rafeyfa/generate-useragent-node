# generate-useragent-node
Simple useragents generator.
# How to install
```bash
npm i generate-useragent-node
```
# How to use
```node
const useragents_1 = require('generate-useragent-node')
let i= 0;
while(i <= 1000){
    const userAgent = useragents_1.userAgentFactory();
    console.log(userAgent)
    i++
}
  ```
