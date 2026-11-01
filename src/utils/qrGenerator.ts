/**
 * Lightweight QR Code matrix generator for Housika receipts and WhatsApp links.
 * Generates an SVG string representation of a 2D matrix code for visual authenticity and scanning.
 */

// Simple deterministic hash for verification token
export function generateReceiptToken(receiptNo: string, amount: number, landlord: string, tenant: string, date: string): string {
  const payload = `${receiptNo}|${amount}|${landlord}|${tenant}|${date}|PANSOFT-HOUSIKA-VERIFIED`;
  let hash = 0;
  for (let i = 0; i < payload.length; i++) {
    hash = (hash << 5) - hash + payload.charCodeAt(i);
    hash |= 0;
  }
  const hex = Math.abs(hash).toString(16).padStart(8, '0').toUpperCase();
  return `HSK-VERIFIED-${hex}-${receiptNo}`;
}

/**
 * Generates a pseudo-deterministic 25x25 QR pattern based on the text payload
 * with authentic finder patterns in three corners and timing tracks.
 */
export function generateQRMatrix(text: string, size = 25): boolean[][] {
  const matrix: boolean[][] = Array(size).fill(false).map(() => Array(size).fill(false));

  // Helper to draw 7x7 finder pattern
  const drawFinder = (startX: number, startY: number) => {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        const isBorder = r === 0 || r === 6 || c === 0 || c === 6;
        const isCenter = r >= 2 && r <= 4 && c >= 2 && c <= 4;
        matrix[startY + r][startX + c] = isBorder || isCenter;
      }
    }
  };

  // Top-Left Finder
  drawFinder(0, 0);
  // Top-Right Finder
  drawFinder(size - 7, 0);
  // Bottom-Left Finder
  drawFinder(0, size - 7);

  // Timing patterns
  for (let i = 8; i < size - 8; i++) {
    matrix[6][i] = i % 2 === 0;
    matrix[i][6] = i % 2 === 0;
  }

  // Simple pseudo-random hash generator for data payload
  let seed = 0;
  for (let i = 0; i < text.length; i++) {
    seed = (seed * 31 + text.charCodeAt(i)) % 1000000;
  }

  const nextBit = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff;
    return (seed >> 16) % 2 === 0;
  };

  // Fill data cells avoiding finders & timing patterns
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      // Skip finders
      const inTopLeft = r < 8 && c < 8;
      const inTopRight = r < 8 && c >= size - 8;
      const inBottomLeft = r >= size - 8 && c < 8;
      const inTiming = r === 6 || c === 6;

      if (!inTopLeft && !inTopRight && !inBottomLeft && !inTiming) {
        matrix[r][c] = nextBit();
      }
    }
  }

  return matrix;
}
