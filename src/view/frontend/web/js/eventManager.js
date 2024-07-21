define([
    'Shopgate_WebCheckout/js/events/loginEvent',
    'Shopgate_WebCheckout/js/events/orderEvent'
    ],
    function (LoginEvent, OrderEvent) {
        class EventManager {
            constructor(controllerName, actionName, env, properties) {
                this.controllerName = controllerName;
                this.actionName = actionName;
                this.isDev = env === 'developer';
                this.properties = properties;
                /**
                 * @type {AbstractEvent[]}
                 */
                this.events = [];
            }

            registerDefaultEvents() {
                // this.registerEvent(CloseBrowserEvent);
                this.registerEvent(LoginEvent);
                this.registerEvent(OrderEvent);
                // this.registerEvent(TokenSyncEvent);
            }
            /**
             * @param {Class} Event
             */
            registerEvent(Event) {
                this.events.push(new Event(this.isDev));
            }

            executeEvents() {
                this.events.forEach(event => {
                    if (!event.supports(this.controllerName, this.actionName, this.properties) || !event.active) {
                        return;
                    }
                    event.log('Executing event > ' + event.constructor.name); // works on non-minified
                    event.execute(this.properties);
                });
            }

            disableEvents() {
                this.events.forEach(event => {
                    event.disable();
                });
            }
        }
        return EventManager
    }
)
