type PlMessages = typeof import("./src/messages/pl.json");
type RuMessages = typeof import("./src/messages/ru.json");

declare interface IntlMessages extends PlMessages, RuMessages {}
