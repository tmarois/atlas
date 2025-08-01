import { describe, it, expect } from 'vitest';
import { formatNumber } from '../../../src/utils/format/formatNumber';

describe('formatNumber', () => {
    // Happy path tests
    it('should format integer with commas and no decimals by default', () => {
        expect(formatNumber(1000)).toBe('1,000');
    });

    it('should format integer with specified decimals', () => {
        expect(formatNumber(1000, 2)).toBe('1,000.00');
    });

    it('should handle string numbers', () => {
        expect(formatNumber('1234')).toBe('1,234');
    });

    it('should format number with millions', () => {
        expect(formatNumber(1234567)).toBe('1,234,567');
    });

    it('should handle decimal numbers', () => {
        expect(formatNumber(1234.56, 2)).toBe('1,234.56');
    });

    it('should round to specified decimals', () => {
        expect(formatNumber(1234.567, 2)).toBe('1,234.57');
    });

    // Bad path tests
    it('should return empty string for empty input', () => {
        expect(formatNumber('')).toBe('');
    });
});
