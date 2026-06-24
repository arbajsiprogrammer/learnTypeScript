class ApiError extends Error {
    statusCode:number;
    errors:any[] ;
    success:boolean ;
    data:null ;

  constructor(
    statusCode:number = 500,
    message:string = "something went wrong",
    errors:any[] = [],
    stack:string = "",
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.success = false;
    this.data = null;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
