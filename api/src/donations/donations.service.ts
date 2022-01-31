import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DonationCreateInput } from 'src/@generated/prisma-nestjs-graphql/donation/donation-create.input';
import { OrderByParams } from 'src/graphql';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: DonationCreateInput) {
    return this.prisma.donation.create({ data: createDonationInput });
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'id', order = 'asc' } = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: { [field]: order },
    });
  }

  findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({
      where: donationWhereUniqueInput,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} donation`;
  }
}
