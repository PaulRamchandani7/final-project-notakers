import bcrypt from 'bcrypt';
import prisma from '../src/config/db.js';


async function main() {
    try {
        // Clear existing data
        await prisma.studyReminder.deleteMany();
        await prisma.note.deleteMany();
        await prisma.subject.deleteMany();
        await prisma.user.deleteMany();
        
        const usersData = [
            {
            email: 'jennifer@gmail.com',
            password: await bcrypt.hash('jennifer1234', 10),
            },
            {
            email: 'test@gmail.com',
            password: await bcrypt.hash('test1234', 10),
            },
            {
            email: 'hello123@gmail.com',
            password: await bcrypt.hash('hello1234', 10),
            role: 'ADMIN',
            },
        ];

        const users = await Promise.all(
            usersData.map((user) => prisma.user.create({ data: user })),
        );

          
        const subjectsData = [
            { name: 'ITSC 3155 - Software Engineering', userId: users[0].id },
            { name: 'MATH 2164 - Linear Algebra', userId: users[1].id },
            { name: 'CS 411 - AI Concepts', userId: users[2].id },
        ];

        const subjects = await Promise.all(
            subjectsData.map((subject) => prisma.subject.create({ data: subject })),
        );

        for (const user of users) {
            await prisma.note.createMany({
              data: [
                {
                  title: `Welcome Note by ${user.email.split('@')[0]}`,
                  content: `This is a sample note by ${user.email.split('@')[0]}.`,
                  userId: user.id,
                },
                {
                  title: `Second Note by ${user.email.split('@')[0]}`,
                  content: `Another example note by ${user.email.split('@')[0]}.`,
                  userId: user.id,
                },
              ],
            });
          }
        
        await prisma.studyReminder.createMany({
            data: [
              {
                title: 'Review API endpoints',
                details: 'Check examples.',
                timeStart: new Date('2025-11-04T09:00:00Z'),
                timeEnd: new Date('2025-11-04T10:00:00Z'),
                userId: users[0].id,
                noteId: 1,
              },
              {
                title: 'Read Chapter 4',
                details: 'Pages 80-105.',
                timeStart: new Date('2025-11-05T14:00:00Z'),
                timeEnd: new Date('2025-11-05T15:00:00Z'),
                userId: users[1].id,
                noteId: null,
              },
            ],
          });
      

        console.log('Database seeding completed successfully!');
    } catch (error) {
        console.error('Seeding failed:', error);
        } finally {
            await prisma.$disconnect();
        }
}
        
    main();







