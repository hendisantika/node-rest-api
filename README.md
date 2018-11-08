# node-rest-api sample

Run this project by this command :
1. `npm install`
2. `npm start`
3. Add Product : 
   ```
   curl -i -X POST -H "Content-Type: application/json" -d '{ "prod_name":"XBox One","prod_desc":"New Microsoft XBox One, the latest games console","prod_price": 520 }' localhost:3000/products
   ```

