import { faker } from "@faker-js/faker";

export const generateMockSpeakers = (num) => {
  let speakers = [];

  for (let i = 0; i < num; i++) {
    speakers.push({
      name: faker.person.fullName(),
      title: faker.person.jobTitle(),
      bio: faker.person.bio(),
      image: faker.image.avatar(),
    });
  }
  return speakers;
};

export const generateMockSchedule = (num) => {
  let schedule = [];

  for (let i = 0; i < num; i++) {
    schedule.push({
      time: faker.date
        .future()
        .toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      title: faker.lorem.sentence(2),
      speaker: faker.person.fullName(),
      //   day: faker.helpers.arrayElement(["day 1", "day 2"]),
    });
  }

  return schedule;
};

export const generateMockConduct = (num) => {
  let conduct = [];

  for (let i = 0; i < num; i++) {
    conduct.push({
      paragraph: faker.lorem.paragraphs(3),
      title: faker.lorem.sentence(2),
    });
  }

  return conduct;
};

export const generateMockFoodOptions = () => {
  return [
    {
      name: "Buffet Lunch",
      description: faker.lorem.sentences(),
      time: "12:00 PM - 2:00 PM",
      location: "Main Dining Hall",
    },
    {
      name: "Snack Bar",
      description: faker.lorem.sentences(),
      time: "10:00 AM - 4:00 PM",
      location: "Lobby Area",
    },
    {
      name: "Food Trucks",
      description: faker.lorem.sentences(),
      time: "11:00 AM - 3:00 PM",
      location: "Outdoor Courtyard",
    },
    {
      name: "Coffee and Tea Station",
      description: faker.lorem.sentences(),
      time: "9:00 AM - 5:00 PM",
      location: "Exhibition Hall",
    },
  ];
};
