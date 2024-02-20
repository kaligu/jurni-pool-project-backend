export default class RespondDTO {
    private status: number;
    private message: string;
    private data?: any;

    constructor(status: number, message: string, data?: any) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    getstatus(): number {
        return this.status;
    }

    setstatus(value: number) {
        this.status = value;
    }

    getmessage(): string {
        return this.message;
    }

    setmessage(value: string) {
        this.message = value;
    }

    getdata(): any {
        return this.data;
    }

    setdata(value: any) {
        this.data = value;
    }

    tostring() {
        return {
            status: this.status,
            message: this.message,
            data: this.data
        }
    }
}