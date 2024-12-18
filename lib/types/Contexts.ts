export interface PayloadAction<T, P> {
  type: T;
  payload: P;
}
