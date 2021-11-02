// main logic
// build a calculator

// Default Export
import math from "./math.mjs"

// Named Export
import { add , times as kali } from "./math.mjs"

// how to use Default Export
console.log(math.subtract(1, 2, 3))
console.log(math.divide(54, 3, 3, 3, 2))

// how to use Named Export
console.log(add(1, 2, 3))
console.log(kali(3, 2, 3))


// Key Takeaways / Conclusion :
// - ES6 Modules help us to organise our code and improve reusability.
// - There are 2 types of export: Default Export and Named Export.
// - When we import a 'Named Export' we must specify what item to import, but not with 'Default Export'