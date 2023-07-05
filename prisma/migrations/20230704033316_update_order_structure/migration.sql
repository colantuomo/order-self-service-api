-- DropIndex
DROP INDEX "customers_email_key";

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "totalValue" DOUBLE PRECISION NOT NULL DEFAULT 0;
