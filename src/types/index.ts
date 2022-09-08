import React from 'react';

export type formSubmitEventFn = (
  event: React.FormEvent<HTMLFormElement>
) => any;

export type inputChangeEventFn = (
  event: React.ChangeEvent<HTMLInputElement>
) => any;

export interface ParentElement {
  children?: React.ReactNode;
}
