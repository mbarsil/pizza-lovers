import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

import { PizzaLoveService } from './pizza-love.service';

interface User {
  userName: string;
}

const PIZZA_LOVE_CHANNEL = 'pizzaLove';

@WebSocketGateway()
export class PizzaLoveGateway {
  @WebSocketServer() server;

  constructor(
    private pizzaLoveService: PizzaLoveService
  ) { }

  async handleConnection(): Promise<void> {
    console.log('[INFO] ===> Connection established by client');
  }

  async handleDisconnect() {
    console.log('[INFO] ===> Connection closed by client');
  }

  @SubscribeMessage(PIZZA_LOVE_CHANNEL)
  createNewLike(client: any, payload: User): void {
    console.log(`[PAYLOAD] ===> ${payload}`);
    if (payload) {
      this.pizzaLoveService.updatePizzaLove(payload.userName);
    }

    this.server.emit(PIZZA_LOVE_CHANNEL, this.pizzaLoveService.users)
  }
}
