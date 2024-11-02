"use client";
export class NotFoundError extends Error {
  constructor(message = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class UnauthorizedError extends Error {
  constructor(message = 'Unauthorized access') {
    super(message);
    this.name = 'UnauthorizedError';
  }
}

export class ForbiddenError extends Error {
  constructor(message = 'Forbidden access') {
    super(message);
    this.name = 'ForbiddenError';
  }
}

export class ServiceError extends Error {
  constructor(message = 'Service error') {
    super(message);
    this.name = 'ServiceError';
  }
}

