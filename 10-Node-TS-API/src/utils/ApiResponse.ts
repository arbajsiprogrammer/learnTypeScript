class ApiResponse {

    statusCode : number;
    message:string;
    data:any;
    success :boolean;

  constructor(statusCode : number, message:string = "successful", data:any) {
    this.statusCode = statusCode;

    this.message = message;
    this.success = statusCode < 400;
    this.data = data;
  }
}

export { ApiResponse };
