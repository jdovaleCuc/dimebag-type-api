export class HttpRequestError extends Error {
  status: number
  constructor(protected statusCode: number, public message: string) {
    super(message);
    this.status = statusCode
  }
}

export class BadRequestError extends HttpRequestError {
  constructor(message: string) {
    super(400, message)
  }
}

export class UnauthorizedError extends HttpRequestError {
  constructor(message: string) {
    super(401, message)
  }
}

export class NotFoundError extends HttpRequestError {
  constructor(message: string) {
    super(404, message)
  }
}
