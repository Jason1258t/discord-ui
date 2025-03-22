import isSameDay from "./sameDay";

export default function formatDate(date, onlyTime = false) {
    const now = new Date();

    if (!(date instanceof Date)) {
        throw new Error("Invalid input: Expected a Date object");
    }
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    if (isSameDay(now, date) || onlyTime) {
        return `${hours}:${minutes}`;
    } else {
        return `${day}.${month}.${year}, ${hours}:${minutes}`;
    }
}
