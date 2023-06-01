type Callback = (...args: any[]) => void;

type EventMap = {
  [type: string]: Array<Callback>;
};

type SagaInput = {
  /**
   * Optional: The mapping between event types and their corresponding callbacks
   */
  eventMap?: EventMap;
  /**
   * Optional: Whether to allow multiple callbacks for the same event type
   */
  multiply?: boolean;
};

type SagaOutput = {
  /**
   * Registers a callback function for a specific event type
   * @param {string} type - The type of event to listen for, '*' is all events
   * @param {Callback} callback - The callback function to execute when the event is triggered
   * @returns {function} A function that unregisters the callback for the event type
   */
  on(type: string, callback: Callback): () => Callback;

  /**
   * Triggers an event with the given type and arguments
   * @param {string} type - The type of event to trigger
   * @param {...*} args - The arguments to pass to the callbacks registered for the event type
   */
  emit(type: string, ...args: any[]): void;
};

/**
 * Creates a saga that can listen for events and emit events
 */
export function saga({
  eventMap,
  multiply = true,
}: SagaInput = {}): SagaOutput {
  const map = eventMap || Object.create(null);

  return {
    on(type: string, callback: Callback) {
      if (!multiply && map[type]?.length > 0) return () => [];

      (map[type] || (map[type] = [])).push(callback);

      return () => map[type].splice(map[type].indexOf(callback) >>> 0, 1);
    },

    emit(type: string, ...args: any[]) {
      (map[type] || []).forEach((callback: Callback) => {
        callback(...args);
      });
      type !== '*' &&
        (map['*'] || []).forEach((callback: Callback) => {
          callback(...args);
        });
    },
  };
}
