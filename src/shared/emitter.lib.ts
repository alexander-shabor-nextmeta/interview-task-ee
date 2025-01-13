type TEventParams = Record<string, number>;
type TEventFn = (params: TEventParams) => void;
type TSubscribers = Record<string, TEventFn[]>;

class EventEmitter {
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

	public emit(name: string, params: TEventParams) {
		this.subscribers[name]?.forEach((event) => event(params));
	}
}

export const eventEmitter = new EventEmitter();
