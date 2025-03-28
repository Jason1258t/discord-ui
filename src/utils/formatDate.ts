export default function formatDate(date: Date, locale = "ru-RU") {
    return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
    }).format(date);
}
