export class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "Network Error x_x";
    }
}
export class DataError extends Error {
    constructor(message) {
        super(message);
        this.name = "Data Error :(";
    }
}
//# sourceMappingURL=errors.js.map