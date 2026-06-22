"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateId = function (input) {
    if (typeof input == "string") {
        return input.toUpperCase();
    }
    else {
        return input + 1000;
    }
};
console.log(generateId("abc"));
console.log(generateId(5));
function renderUI(state) {
    switch (state.status) {
        case "loading":
            console.log("loading please wait...");
            break;
        case "success":
            console.log("Data loaded successfully");
            state.data.forEach((d) => console.log(d));
            break;
        case "error":
            console.log("error...");
            console.log(`errorCode : ${state.errorCode}, ${state.errorMessage}`);
            break;
    }
}
renderUI({
    status: "loading"
});
renderUI({
    status: "success",
    data: ["a", "b", "c"]
});
renderUI({ status: "error", errorMessage: "Not Found", errorCode: 404 });
//# sourceMappingURL=index.js.map