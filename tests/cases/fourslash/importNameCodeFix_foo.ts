/// <reference path="fourslash.ts" />

// @Filename: /tsconfig.json
////{
////    "compilerOptions": {
////        "allowJs": true,
////        "checkJs": true
////    }
////}

// @Filename: /localstorage.js
////(function () {
////    "use strict";
////
////    var db;
////
////    function LocalStorage() {
////    }
////    db = LocalStorage;
////
////    if (global.localStorage) {
////        module.exports = localStorage;
////    } else {
////        module.exports = new LocalStorage();
////    }
////}());

// @Filename: /a.js
////export const foo = 0;

// @Filename: /b.js
////foo

goTo.file("/b.js");
verify.importFixAtPosition([
    `foo;
import { bar } from "./b";
import { foo } from "./a";
`,
]);
