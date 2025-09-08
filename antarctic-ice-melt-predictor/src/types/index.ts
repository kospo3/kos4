export interface IceMeltPrediction {
    year: number;
    predictedMelt: number; // in gigatons
}

export interface ChartData {
    labels: string[];
    data: number[];
}

export interface IceMeltProps {
    predictions: IceMeltPrediction[];
}