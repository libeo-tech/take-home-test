import fs from 'fs';

describe('Golden master test', () => {
    it('should expect same result as the initial output', () => {
        
        const initialResult = fs.readFileSync('initial-output.txt').toString();
        const newResult = fs.readFileSync('output.txt').toString();

        expect(newResult).toEqual(initialResult);
    })
});