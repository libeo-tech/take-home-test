const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

describe('Generated File Test', () => {
  it('should match the content of the expected file', () => {
    // Run script to generate the file
    execSync('babel-node index.js', { stdio: 'inherit' });

    const generatedFilePath = path.join(__dirname, '../output.txt');
    const expectedFilePath = path.join(__dirname, '../expectedOutput.txt');

    // Read the contents of the generated file
    const generatedFileContent = fs.readFileSync(generatedFilePath, 'utf8');

    // Read the contents of the expected file
    const expectedFileContent = fs.readFileSync(expectedFilePath, 'utf8');

    // Compare the contents
    expect(generatedFileContent).toEqual(expectedFileContent);
  });
});
