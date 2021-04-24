import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helppers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFirleds = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFirleds) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 500,
      body: new MissingParamError('Something wrong happened')
    }
  }
}
