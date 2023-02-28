class RouteEvent extends Event {
  constructor(namespace, messageDto) {
    super(namespace);

    this.namespace = namespace;
    this.messageDto = messageDto;
  }
}

export default class RouteDispatcher extends EventTarget {
  constructor() {
    super();
  }

  route(namespace, messageDto) {
    this.dispatchEvent(new RouteEvent(namespace, messageDto));
  }
}
