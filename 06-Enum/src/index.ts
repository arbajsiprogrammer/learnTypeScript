// 3 Types of Enums

// Type 1 — Numeric Enum (default)
enum directions {
    north, // 0 automatically
    south, // 1 automatically
    east, // 2 automatically
    west // 3 automatically
}

console.log(directions.north)// 0;


// Custom starting number:

enum StatusCode {
    ok = 200,
    created = 201,
    badRequest = 400,
    unAuthorized = 401,
    notFound = 404,
    serverError = 500
}

console.log(StatusCode.ok);//200

// Type 2 — String Enum 

enum OrderStatus {
    Pending = "pending",
    Confirmed = "confirmed",
    Shipped = "shipped",
    Delivered = "delivered",
    Cancelled = "cancelled"
}

const myOrder : OrderStatus = OrderStatus.Pending;
console.log(`myOrder : ${myOrder}`);

function updateOrder(status : OrderStatus){
    console.log(`status updated ${status}`)
}

updateOrder(OrderStatus.Pending);
updateOrder(OrderStatus.Confirmed);
updateOrder(OrderStatus.Shipped);

// updateOrder("RANDOM"); // Error : Argument of type '"RANDOM"' is not assignable to parameter of type 'OrderStatus'.