import { Prisma } from "@prisma/client";
import { RepositoryException } from "../../../infrastructure/adapters/exceptions/repository.exception";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

export async function handleRepositoryError<T>(promise: Promise<T>) {
	try {
		return await promise;
	} catch (e) {
		if (e instanceof Prisma.PrismaClientKnownRequestError) {
			switch (e.code) {
				case "P2002":
					throw new RepositoryException(e.meta?.target as string + " is not unique.");
				case "P2025":
					//TODO: find a way to retrieve correct status code;
					throw new RepositoryException(e.meta?.cause as string);
				default:
					throw new RepositoryException(e as any);			
			}
		}
		throw new RepositoryException(e as any);
	}
}
