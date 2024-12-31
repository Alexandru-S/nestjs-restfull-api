import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // Create hotels with rooms and bookings
  const hotel1 = await prisma.hotel.upsert({
    where: { name: 'The Grand Budapest' },
    update: {},
    create: {
      name: 'The Grand Budapest',
      description: 'A luxurious hotel located in the heart of the mountains.',
      location: 'Zubrowka',
      rooms: {
        create: [
          {
            number: 101,
            type: 'Suite',
            price: 250,
            bookings: {
              create: [
                {
                  checkIn: new Date('2024-01-10'),
                  checkOut: new Date('2024-01-15'),
                  guestName: 'John Doe',
                  guestEmail: 'johndoe@example.com',
                },
              ],
            },
          },
          {
            number: 102,
            type: 'Double',
            price: 150,
          },
        ],
      },
    },
  });

  const hotel2 = await prisma.hotel.upsert({
    where: { name: 'Oceanview Retreat' },
    update: {},
    create: {
      name: 'Oceanview Retreat',
      description: 'A serene getaway with stunning ocean views.',
      location: 'California Coast',
      rooms: {
        create: [
          {
            number: 201,
            type: 'Double',
            price: 200,
            bookings: {
              create: [
                {
                  checkIn: new Date('2024-02-05'),
                  checkOut: new Date('2024-02-10'),
                  guestName: 'Jane Smith',
                  guestEmail: 'janesmith@example.com',
                },
              ],
            },
          },
          {
            number: 202,
            type: 'Single',
            price: 100,
          },
        ],
      },
    },
  });

  const hotel3 = await prisma.hotel.upsert({
    where: { name: 'Urban Oasis' },
    update: {},
    create: {
      name: 'Urban Oasis',
      description: 'A modern hotel in the heart of the city.',
      location: 'New York',
      rooms: {
        create: [
          {
            number: 301,
            type: 'Suite',
            price: 300,
            bookings: {
              create: [
                {
                  checkIn: new Date('2024-03-15'),
                  checkOut: new Date('2024-03-20'),
                  guestName: 'Alice Johnson',
                  guestEmail: 'alicejohnson@example.com',
                },
              ],
            },
          },
          {
            number: 302,
            type: 'Double',
            price: 180,
          },
        ],
      },
    },
  });

  const hotel4 = await prisma.hotel.upsert({
    where: { name: 'Mountain Escape' },
    update: {},
    create: {
      name: 'Mountain Escape',
      description: 'A quiet retreat nestled in the snowy peaks.',
      location: 'Swiss Alps',
      rooms: {
        create: [
          {
            number: 401,
            type: 'Single',
            price: 120,
            bookings: {
              create: [
                {
                  checkIn: new Date('2024-04-01'),
                  checkOut: new Date('2024-04-05'),
                  guestName: 'Bob Brown',
                  guestEmail: 'bobbrown@example.com',
                },
              ],
            },
          },
          {
            number: 402,
            type: 'Double',
            price: 200,
          },
        ],
      },
    },
  });

  const hotel5 = await prisma.hotel.upsert({
    where: { name: 'Desert Mirage' },
    update: {},
    create: {
      name: 'Desert Mirage',
      description: 'An exotic hotel offering unique desert experiences.',
      location: 'Sahara Desert',
      rooms: {
        create: [
          {
            number: 501,
            type: 'Suite',
            price: 350,
            bookings: {
              create: [
                {
                  checkIn: new Date('2024-05-10'),
                  checkOut: new Date('2024-05-15'),
                  guestName: 'Clara White',
                  guestEmail: 'clarawhite@example.com',
                },
              ],
            },
          },
          {
            number: 502,
            type: 'Single',
            price: 150,
          },
        ],
      },
    },
  });

  console.log({ hotel1, hotel2, hotel3, hotel4, hotel5 });
}

// Execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Close Prisma Client at the end
    await prisma.$disconnect();
  });
