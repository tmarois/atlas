/**
 * Converts a UTC datetime (string or Date) to a localized date string.
 * @param utcDatetime - A UTC ISO date string or Date object
 * @param userTimezone - Target time zone (default: 'UTC')
 * @param locale - Output locale (default: 'en-US')
 * @returns Localized date string (e.g. '7/22/2025')
 */
export const formatDate = (
    utcDatetime: string | Date,
    userTimezone = 'UTC',
    locale = 'en-US'
): string => {
    if (!utcDatetime) return '';

    const date =
        utcDatetime instanceof Date
            ? utcDatetime
            : typeof utcDatetime === 'string'
                ? new Date(utcDatetime.endsWith('Z') ? utcDatetime : `${utcDatetime}Z`)
                : null;

    if (!date || isNaN(date.getTime())) return '';

    return date.toLocaleDateString(locale, { timeZone: userTimezone });
};
