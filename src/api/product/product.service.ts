import { Prisma } from "@prisma/client";
import { prisma } from "../../database/prisma";

export async function findById(id: string) {
  return prisma.product.findUnique({
    where: {
      id: id,
    },
  });
}

export async function findAll(filter?: Prisma.ProductWhereInput) {
  return prisma.product.findMany({
    where: filter,
  });
}

export async function create(data: Prisma.ProductCreateInput) {
  return prisma.product.create({
    data: data,
  });
}

export async function update(id: string, data: Prisma.ProductUpdateInput) {
  return prisma.product.update({
    where: {
      id: id,
    },
    data: data,
  });
}

export async function remove(id: string) {
  return prisma.product.delete({
    where: {
      id: id,
    },
  });
}
