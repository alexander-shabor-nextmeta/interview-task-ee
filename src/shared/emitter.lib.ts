type TEventFn = (params: object) => void;
type TSubscribers = Record<string, TEventFn[]>;

export class EventEmitter {
	public subscribers: TSubscribers = {};

	public subscribe(name: string, eventFn: TEventFn) {
		if (!this.subscribers[name]) this.subscribers[name] = [];
		this.subscribers[name]?.push(eventFn);

		return () => {
			this.subscribers[name] = this.subscribers[name]?.filter(
				(_eventFn) => !(eventFn === _eventFn)
			);
		};
	}

	public emit(name: string, params: object) {
		this.subscribers[name]?.forEach((event) => event(params));
	}
}

export const eventEmitter = new EventEmitter();
