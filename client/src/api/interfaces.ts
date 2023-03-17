export interface ApiError {
    errors: Array<{
        value?: string;
        msg: string;
        param: string;
        location: string;
    }>;
}
