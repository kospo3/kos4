import { PredictionData } from '../types';

export const predictIceMelt = (historicalData: PredictionData[], yearsAhead: number): number => {
    const totalMelt = historicalData.reduce((acc, data) => acc + data.meltAmount, 0);
    const averageMeltPerYear = totalMelt / historicalData.length;

    return averageMeltPerYear * yearsAhead;
};

export const generateFuturePredictions = (historicalData: PredictionData[], yearsAhead: number): PredictionData[] => {
    const predictions: PredictionData[] = [];
    const lastYear = historicalData[historicalData.length - 1].year;

    for (let i = 1; i <= yearsAhead; i++) {
        const predictedYear = lastYear + i;
        const predictedMelt = predictIceMelt(historicalData, i);
        predictions.push({ year: predictedYear, meltAmount: predictedMelt });
    }

    return predictions;
};