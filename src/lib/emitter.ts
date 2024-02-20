type TEvents = "updateText";
type TSubscribers = { [key in TEvents]?: [Function][] };

export class EventEmitter {
  public subscribers: TSubscribers = {};

  public subscribe(name: TEvents, event: Function) {
    if (!this.subscribers[name]) this.subscribers[name] = [];
    this.subscribers[name]?.push([event]);

    return () => {
      this.subscribers[name] = this.subscribers[name]?.filter(
        ([_event]) => !(event === _event)
      );
    };
  }

  public emit(name: TEvents, params: object) {
    this.subscribers[name]?.forEach(([event]) => event(params));
  }
}

export const eventEmitter = new EventEmitter();
