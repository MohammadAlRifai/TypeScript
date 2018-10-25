/// <reference path="fourslash.ts" />

// @noLib: true

// @Filename: /a.ts
////import {} from ".//**/";

// @Filename: /b.ts
////

verify.completions({
    marker: "",
    exact: {
        name: "b",
        text: "b",
        kind: "script",
    },
    isNewIdentifierLocation: true
});
