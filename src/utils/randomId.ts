/**
 * Generates a time-based numeric ID
 * @returns A numeric ID based on timestamp and random component
 */
function generateTimeBasedId(): number {
    const timestamp = Date.now();
    const randomComponent = Math.floor(Math.random() * 10000);

    return timestamp * 10000 + randomComponent;
}

export default generateTimeBasedId;