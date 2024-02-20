export default class UserWeatherDTO {
    private description: string;
    private temperature: number;
    private feelsLike: number;
    private minTemperature: number;
    private maxTemperature: number;
    private windSpeed: number;
    private cloudiness: number;
    private pressure: number;
    private humidity: number;
    private seaLevelPressure: number;
    private imageCode: string;
    private location: string;

    constructor(description: string, temperature: number, feelsLike: number, minTemperature: number, maxTemperature: number, windSpeed: number, cloudiness: number, pressure: number, humidity: number, seaLevelPressure: number, imageCode: string, location: string) {
        this.description = description;
        this.temperature = temperature;
        this.feelsLike = feelsLike;
        this.minTemperature = minTemperature;
        this.maxTemperature = maxTemperature;
        this.windSpeed = windSpeed;
        this.cloudiness = cloudiness;
        this.pressure = pressure;
        this.humidity = humidity;
        this.seaLevelPressure = seaLevelPressure;
        this.imageCode = imageCode;
        this.location = location;
    }

    getDescription(): string {
        return this.description;
    }

    setDescription(value: string): void {
        this.description = value;
    }

    getTemperature(): number {
        return this.temperature;
    }

    setTemperature(value: number): void {
        this.temperature = value;
    }

    getFeelsLike(): number {
        return this.feelsLike;
    }

    setFeelsLike(value: number): void {
        this.feelsLike = value;
    }

    getMinTemperature(): number {
        return this.minTemperature;
    }

    setMinTemperature(value: number): void {
        this.minTemperature = value;
    }

    getMaxTemperature(): number {
        return this.maxTemperature;
    }

    setMaxTemperature(value: number): void {
        this.maxTemperature = value;
    }

    getWindSpeed(): number {
        return this.windSpeed;
    }

    setWindSpeed(value: number): void {
        this.windSpeed = value;
    }

    getCloudiness(): number {
        return this.cloudiness;
    }

    setCloudiness(value: number): void {
        this.cloudiness = value;
    }

    getPressure(): number {
        return this.pressure;
    }

    setPressure(value: number): void {
        this.pressure = value;
    }

    getHumidity(): number {
        return this.humidity;
    }

    setHumidity(value: number): void {
        this.humidity = value;
    }

    getSeaLevelPressure(): number {
        return this.seaLevelPressure;
    }

    setSeaLevelPressure(value: number): void {
        this.seaLevelPressure = value;
    }

    getImageCode(): string {
        return this.imageCode;
    }

    setImageCode(value: string): void {
        this.imageCode = value;
    }

    getLocation(): string {
        return this.location;
    }

    setLocation(value: string): void {
        this.location = value;
    }

    toString(): string {
        return JSON.stringify({
            description: this.description,
            temperature: this.temperature,
            feelsLike: this.feelsLike,
            minTemperature: this.minTemperature,
            maxTemperature: this.maxTemperature,
            windSpeed: this.windSpeed,
            cloudiness: this.cloudiness,
            pressure: this.pressure,
            humidity: this.humidity,
            seaLevelPressure: this.seaLevelPressure,
            imageCode: this.imageCode,
            location: this.location
        });
    }
}
