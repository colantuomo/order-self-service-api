/*
  Warnings:

  - You are about to drop the `_OrderProduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_OrderProduct" DROP CONSTRAINT "_OrderProduct_A_fkey";

-- DropForeignKey
ALTER TABLE "_OrderProduct" DROP CONSTRAINT "_OrderProduct_B_fkey";

-- DropTable
DROP TABLE "_OrderProduct";

-- CreateTable
CREATE TABLE "OrderItems" (
    "orderId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,

    CONSTRAINT "OrderItems_pkey" PRIMARY KEY ("orderId","productId")
);

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "orders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrderItems" ADD CONSTRAINT "OrderItems_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
