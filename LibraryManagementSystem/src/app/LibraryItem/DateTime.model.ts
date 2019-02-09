export class DateTime {
    private day: number;

    private month: number;

    private year: number;

    private hour: number;

    private minute: number;

    private second: number;

    constructor(Day: number, Month: number, Year: number) {
        this.day = Day;
        this.month = Month;
        this.year = Year;
    }


    public  getDay() {
        return this.day;
    }

    public setDay(day: number) {
        this.day = day;
    }

    public getMonth() {
        return this.month;
    }

    public setMonth(month: number) {
        this.month = month;
    }

    public getYear() {
        return this.year;
    }

    public setYear(year: number) {
        this.year = year;
    }

    public  getHour() {
        return this.hour;
    }

    public setHour(Hour: number) {
        this.hour = Hour;
    }
    public  getMinute() {
        return this.minute;
    }

    public setMinute(Min: number) {
        this.minute = Min;
    }
    public  getSecond() {
        return this.second;
    }

    public setSecond(Sec: number) {
        this.second = Sec;
    }

    public getDate() {
        return this.day + '/' + this.month + '/' + this.year + ' ' + this.hour + ':' + this.minute + ':' + this.second;
    }



}
