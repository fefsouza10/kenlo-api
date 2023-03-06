import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getSaoPauloCities(): string {
    const jsonValue = {
      total: 10,
      items: [
        {
          id: 1,
          cidade: 'Campinas',
          latitude: '-22.8951606',
          longitude: '-47.1711205,11',
        },
        {
          id: 2,
          cidade: 'Valinhos',
          latitude: '-22.9860169',
          longitude: '-47.0888407',
        },
      ],
    };
    return JSON.stringify(jsonValue);
  }
}
