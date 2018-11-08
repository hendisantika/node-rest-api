# node-rest-api sample

Run this project by this command :
1. `npm install`
2. `npm start`
3. Add Product : 
   ```
   curl -i -X POST -H "Content-Type: application/json" -d '{ "prod_name":"XBox One","prod_desc":"New Microsoft XBox One, the latest games console","prod_price": 520 }' localhost:3000/products
   ```
   Add more products :
   ```
   curl -i -X POST -H "Content-Type: application/json" -d '{ "prod_name":"Sony PS 4","prod_desc":"Sony playstation 4","prod_price": 580 }' localhost:3000/products
   ```
4. Next, we are testing to get all products data using this command :
    ```
    curl -i -H "Accept: application/json" localhost:3000/products
    ```
5. Next, we are testing to get one product by id using this command.
    ```$xslt
    curl -i -H "Accept: application/json" localhost:3000/products/5b2648abf8c8a90311129814
    ```
6. Next, we are editing and update one of a product by id using this command. First, copy id from one of product from the response before then paste it as the parameter.
    ```$xslt
    curl -i -X PUT -H "Content-Type: application/json" -d '{"prod_desc":"Microsoft XBox One"}' localhost:3000/products/58a9115abed027087df7133b
    ```
7. Finally, we are testing for delete one product by id using this command.
    ```$xslt
    curl -i -X DELETE localhost:3000/products/5b2648abf8c8a90311129814
    ```