export class NetworkError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Network Error x_x";
  }
}

export class DataError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "Data Error :("
  }
}