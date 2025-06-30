export interface ResponseArrayServer<T> {
    data: T[],
    message: string,
    success: boolean
}