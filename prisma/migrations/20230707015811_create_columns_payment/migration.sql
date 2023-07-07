-- AlterTable
ALTER TABLE "payments" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "externalPaymentId" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3);
