## TypeScript

# 3
- Install global : npm install -g typescript
- Install Locally : npm install --save-dev typescript
- TypeScript Version : 5.3.3

### Run TypeScript File 

(tsc index.ts -> index.js -> node index.js) <br>
(fixed compiler tsc index.ts --watch)
- 1. tsc fileName with extension
- 2. node JavaScript file Name with extension

# 4 data type

- Any (Supper type)
build in type: number, string, boolean, void, null, undefined, etc.
user defined type: array, Enums, Classes, interface, etc.

- Example of build-in types
    -let firstName : string;
- Void 
    -Functions that do not return anything are void

- ### User defined data type

#### 5.1 Union Type

- union type -more then one type for variable or function parameter.

 -let userId : string | number


 #### 5.2 Array

 - Array type similar data type
 // let user = ["salib", "Ali", "Al Amin"]

 #### 5.3 Tuple type

 - Tuple Type - mixed data type
 
