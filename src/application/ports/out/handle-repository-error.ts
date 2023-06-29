import { Prisma } from "@prisma/client";
import { RepositoryException } from "../../../infrastructure/adapters/exceptions/repository.exception";

export async function handleRepositoryError<T>(promise: Promise<T>) {
  try {
    return await promise;
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      //TODO: find a way to retrieve correct status code;
      throw new RepositoryException(e.meta?.cause as string);
    }
    throw new RepositoryException();
  }
}