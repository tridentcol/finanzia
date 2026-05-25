type LogLevel = "debug" | "info" | "warn" | "error";

type LogFields = Record<string, unknown>;

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  fields?: LogFields;
}

function emit(entry: LogEntry): void {
  const payload = JSON.stringify(entry);
  if (entry.level === "error") {
    console.error(payload);
  } else if (entry.level === "warn") {
    console.warn(payload);
  } else {
    console.info(payload);
  }
}

function log(level: LogLevel, message: string, fields?: LogFields): void {
  if (process.env.NODE_ENV === "test") return;
  if (level === "debug" && process.env.NODE_ENV === "production") return;
  emit({ level, message, timestamp: new Date().toISOString(), fields });
}

export const logger = {
  debug: (message: string, fields?: LogFields) => log("debug", message, fields),
  info: (message: string, fields?: LogFields) => log("info", message, fields),
  warn: (message: string, fields?: LogFields) => log("warn", message, fields),
  error: (message: string, fields?: LogFields) => log("error", message, fields),
};
