export const generateNumber = ({ min, max }: { min: number; max: number; }) => Math.ceil(Math.random() * (max - min)) + min;
