function matchCron(cron, date) {
    const cronParts = cron.split(' ');
    const dateParts = [
        date.getMinutes(),
        date.getHours(),
        date.getDate(),
        date.getMonth() + 1,
        date.getDay() || 7
    ];

    for (let i = 0; i < 5; i++) {
        if (cronParts[i] !== '*' && parseInt(cronParts[i], 10) !== dateParts[i]) {
            return false;
        }
    }

    return true;
}