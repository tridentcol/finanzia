export type Result<T, E = AppError> =
  | { ok: true; data: T }
  | { ok: false; error: E };

export function ok<T>(data: T): Result<T, never> {
  return { ok: true, data };
}

export function err<E>(error: E): Result<never, E> {
  return { ok: false, error };
}

export class AppError extends Error {
  readonly code: string;
  readonly userMessage: string;
  override readonly cause?: unknown;
  readonly statusCode: number;

  constructor(params: {
    code: string;
    message: string;
    userMessage?: string;
    cause?: unknown;
    statusCode?: number;
  }) {
    super(params.message);
    this.name = "AppError";
    this.code = params.code;
    this.userMessage = params.userMessage ?? params.message;
    this.cause = params.cause;
    this.statusCode = params.statusCode ?? 500;
  }

  toJSON(): { code: string; message: string; userMessage: string; statusCode: number } {
    return {
      code: this.code,
      message: this.message,
      userMessage: this.userMessage,
      statusCode: this.statusCode,
    };
  }
}

export const Errors = {
  unauthorized: (cause?: unknown) =>
    new AppError({
      code: "auth/unauthorized",
      message: "Not authenticated",
      userMessage: "Sesión expirada. Inicia sesión de nuevo.",
      statusCode: 401,
      cause,
    }),
  forbidden: (cause?: unknown) =>
    new AppError({
      code: "auth/forbidden",
      message: "Access denied",
      userMessage: "No tienes acceso a este recurso.",
      statusCode: 403,
      cause,
    }),
  notFound: (entity: string) =>
    new AppError({
      code: `${entity}/not-found`,
      message: `${entity} not found`,
      userMessage: "No se ha encontrado el recurso solicitado.",
      statusCode: 404,
    }),
  validation: (message: string, cause?: unknown) =>
    new AppError({
      code: "validation/invalid-input",
      message,
      userMessage: "Los datos enviados no son válidos.",
      statusCode: 400,
      cause,
    }),
  internal: (message: string, cause?: unknown) =>
    new AppError({
      code: "internal/unknown",
      message,
      userMessage: "Algo no ha ido bien. Vuelve a intentarlo en unos instantes.",
      statusCode: 500,
      cause,
    }),
} as const;
