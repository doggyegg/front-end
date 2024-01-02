const ModuleB = require("./b.js");
const moduleName = ModuleB.moduleName + "C";

console.log(moduleName);
exports.moduleName = moduleName;
