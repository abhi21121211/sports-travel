const { calculateQuote } = require('../services/pricingService');

describe('Pricing Logic', () => {
    beforeAll(() => {
        // Lock system time to 2024-01-01
        jest.useFakeTimers();
        jest.setSystemTime(new Date('2024-01-01'));
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    const basePackage = {
        price: 1000,
        duration: '3 Days' // Default duration
    };

    test('Base Price only (No adjustments)', () => {
        // Date: Feb 15, 2024 (45 days away - no early/last minute)
        // Month: Feb (No seasonal)
        // Day: Thursday (Feb 15 is Thu). Duration 3 days: Thu, Fri, Sat. Wait, Sat is weekend.
        // Let's pick a date that avoids weekend.
        // Feb 13, 2024 is Tuesday. 3 days: Tue, Wed, Thu. No weekend.
        const event = { date: '2024-02-13' };
        const result = calculateQuote(basePackage, event, 1);

        expect(result.basePrice).toBe(1000);
        expect(result.adjustments.seasonalMultiplier).toBe(0);
        expect(result.adjustments.earlyBirdDiscount).toBe(0);
        expect(result.adjustments.lastMinuteSurcharge).toBe(0);
        expect(result.adjustments.groupDiscount).toBe(0);
        expect(result.adjustments.weekendSurcharge).toBe(0);
        expect(result.finalPrice).toBe(1000);
    });

    test('Seasonal Multiplier (High Season +20%)', () => {
        // June 15, 2024.
        // Days away: > 120 (Jan 1 to June 15 is ~166 days). So Early Bird applies too (-10%).
        // Let's isolate Seasonal.
        // We need a date that is NOT > 120 days and NOT < 15 days.
        // 2024-01-01 + 60 days = March 1.
        // We need June/July/Dec.
        // If today is Jan 1, June is far away.
        // So Early Bird will apply if we test June.
        // Let's change "Today" for this test? Or accept that Early Bird applies.
        // Let's accept Early Bird applies and verify both.

        const event = { date: '2024-06-15' }; // June -> +20%. >120 days -> -10%.
        // Weekend? June 15 2024 is Saturday. So Weekend applies (+8%).
        // Let's pick a weekday in June. June 12 (Wed). 3 days: Wed, Thu, Fri. No weekend.
        const eventNoWeekend = { date: '2024-06-12' };

        const result = calculateQuote(basePackage, eventNoWeekend, 1);

        // Base: 1000
        // Seasonal (June): +200
        // Early Bird (>120): -100
        // Total: 1100

        expect(result.adjustments.seasonalMultiplier).toBe(200);
        expect(result.adjustments.earlyBirdDiscount).toBe(-100);
        expect(result.finalPrice).toBe(1100);
    });

    test('Last Minute Surcharge (+25%)', () => {
        // Jan 10, 2024 (9 days away).
        // Month: Jan (No seasonal).
        // Weekend? Jan 10 is Wed. 3 days: Wed, Thu, Fri. No weekend.
        const event = { date: '2024-01-10' };

        const result = calculateQuote(basePackage, event, 1);

        // Base: 1000
        // Last Minute: +250
        // Total: 1250

        expect(result.adjustments.lastMinuteSurcharge).toBe(250);
        expect(result.finalPrice).toBe(1250);
    });

    test('Group Discount (-8%)', () => {
        // Feb 13, 2024 (Safe date).
        const event = { date: '2024-02-13' };
        const travellers = 4;

        const result = calculateQuote(basePackage, event, travellers);

        // Base: 1000
        // Group: -80
        // Final Per Person: 920
        // Total: 920 * 4 = 3680

        expect(result.adjustments.groupDiscount).toBe(-80);
        expect(result.perPersonPrice).toBe(920);
        expect(result.totalPrice).toBe(3680);
    });

    test('Weekend Surcharge (+8%)', () => {
        // Feb 16, 2024 is Friday. 3 days: Fri, Sat, Sun. Includes weekend.
        const event = { date: '2024-02-16' };

        const result = calculateQuote(basePackage, event, 1);

        // Base: 1000
        // Weekend: +80
        // Total: 1080

        expect(result.adjustments.weekendSurcharge).toBe(80);
        expect(result.finalPrice).toBe(1080);
    });
});
