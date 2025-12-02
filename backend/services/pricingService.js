const calculateQuote = (packageData, eventData, travellers = 1) => {
    let basePrice = packageData.price;
    let finalPrice = basePrice;
    const adjustments = {
        seasonalMultiplier: 0,
        earlyBirdDiscount: 0,
        lastMinuteSurcharge: 0,
        groupDiscount: 0,
        weekendSurcharge: 0,
    };

    const eventDate = new Date(eventData.date);
    const month = eventDate.getMonth(); // 0-11

    // 2. Seasonal Multiplier
    // June (5), July (6), December (11) -> +20%
    if ([5, 6, 11].includes(month)) {
        adjustments.seasonalMultiplier = basePrice * 0.20;
    }
    // April (3), May (4), September (8) -> +10%
    else if ([3, 4, 8].includes(month)) {
        adjustments.seasonalMultiplier = basePrice * 0.10;
    }
    finalPrice += adjustments.seasonalMultiplier;

    // 3. Early-Bird Discount & 4. Last-Minute Surcharge
    const today = new Date();
    const timeDiff = eventDate.getTime() - today.getTime();
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

    if (daysDiff >= 120) {
        adjustments.earlyBirdDiscount = -(basePrice * 0.10);
        finalPrice += adjustments.earlyBirdDiscount;
    } else if (daysDiff < 15 && daysDiff >= 0) {
        adjustments.lastMinuteSurcharge = basePrice * 0.25;
        finalPrice += adjustments.lastMinuteSurcharge;
    }

    // 5. Group Discount
    if (travellers >= 4) {
        adjustments.groupDiscount = -(basePrice * 0.08);
        finalPrice += adjustments.groupDiscount;
    }

    // 6. Weekend Surcharge
    // Check if event includes Saturday or Sunday
    // Assuming event is 1 day for simplicity based on 'date', but package has duration.
    // If duration is 'X Days', we should check the range.
    // Let's parse duration.
    const durationMatch = packageData.duration.match(/(\d+)/);
    const durationDays = durationMatch ? parseInt(durationMatch[1]) : 1;

    let hasWeekend = false;
    for (let i = 0; i < durationDays; i++) {
        const currentDay = new Date(eventDate);
        currentDay.setDate(eventDate.getDate() + i);
        const dayOfWeek = currentDay.getDay(); // 0 = Sunday, 6 = Saturday
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            hasWeekend = true;
            break;
        }
    }

    if (hasWeekend) {
        adjustments.weekendSurcharge = basePrice * 0.08;
        finalPrice += adjustments.weekendSurcharge;
    }

    return {
        basePrice,
        adjustments,
        finalPrice: Math.max(0, finalPrice) * travellers, // Total price for all travellers? Or per person? 
        // Usually quotes are total. But base price is usually per person.
        // "Base Price: from the package" -> usually per person.
        // Let's assume the final price is per person * travellers.
        // Re-reading: "Travellers >= 4 -> -8%". This implies per-person discount logic applied to the rate.
        // Let's calculate per person final price first, then multiply by travellers.
        perPersonPrice: Math.max(0, finalPrice),
        totalPrice: Math.max(0, finalPrice) * travellers
    };
};

module.exports = { calculateQuote };
