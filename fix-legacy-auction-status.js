import prisma from './src/lib/prismaClient.js';

try {
  const rows = await prisma.$queryRawUnsafe("SELECT id, status FROM Auction WHERE status = 'CLOSED_UNSOLD' ORDER BY id LIMIT 20");
  console.log('LEGACY_ROWS', JSON.stringify(rows));
  const result = await prisma.$executeRawUnsafe("UPDATE Auction SET status = 'UNSOLD' WHERE status = 'CLOSED_UNSOLD'");
  console.log('UPDATED_ROWS', result);
  const after = await prisma.$queryRawUnsafe("SELECT id, status FROM Auction WHERE status IN ('CLOSED_UNSOLD', 'UNSOLD') ORDER BY id LIMIT 20");
  console.log('AFTER', JSON.stringify(after));
} catch (error) {
  console.error('ERR', error);
  process.exit(1);
}
