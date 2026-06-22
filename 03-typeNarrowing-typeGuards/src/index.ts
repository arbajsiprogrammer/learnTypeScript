
const generateId = function (input :string | number) : string | number{

    if(typeof input == "string"){
        return input.toUpperCase();
    }else {
        return input + 1000;
    }
} 

console.log(generateId("abc"));
console.log(generateId(5));


// console.log(generateId(true)); error

// API response handler 

interface loadingState {
    status:"loading";
}

interface successState {
    status: "success";
    data: string[];
}

interface errorState {
    status: "error";
    errorMessage:string;
    errorCode:number;
}

type ApiState = loadingState | successState | errorState;

function renderUI (state : ApiState){

    switch(state.status){
        case "loading" :
            console.log("loading please wait...");
            break;
        
        case "success":
            console.log("Data loaded successfully");
            state.data.forEach((d)=>console.log(d));
            break;

        case "error":
            console.log("error...");
            console.log(`errorCode : ${state.errorCode}, ${state.errorMessage}`);
            break;
    }
}

renderUI({
    status:"loading"
});

renderUI({
    status: "success",
    data: ["a","b","c"]
});

renderUI({ status: "error", errorMessage: "Not Found", errorCode: 404 });
