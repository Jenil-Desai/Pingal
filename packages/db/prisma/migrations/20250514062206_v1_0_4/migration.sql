-- AlterTable
ALTER TABLE "Validator" ADD COLUMN     "pendingPayment" INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "WebsiteTick" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;
