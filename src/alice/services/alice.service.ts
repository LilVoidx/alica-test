import { Injectable } from '@nestjs/common';
import { AliceRequest, AliceResponse } from '../interfaces/alice.interface';

@Injectable()
export class AliceService {
  getSimpleResponse(request: AliceRequest): AliceResponse {
    console.log('Received request:', request);
    console.log('Response:', {
      text: 'Hello from NestJS Alice skill!',
      end_session: false,
    });
    return {
      version: request.version,
      session: request.session,
      response: {
        text: 'Hello from NestJS Alice skill!',
        end_session: false,
      },
    };
  }
}
