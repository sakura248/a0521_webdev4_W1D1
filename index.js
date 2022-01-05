// Put this function in a different module and export it. Then, in this module, import the module that contains your function and call it from this module.
import { mySum } from './mySum.js'

console.log(mySum(3,4))