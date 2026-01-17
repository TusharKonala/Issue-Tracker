import { PrismaClient, Status } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.issue.createMany({
    data: [
      {
        title: "Website Login Issue",
        description:
          "Users are unable to log in to the website. They receive an error message when attempting to sign in.",
        status: Status.OPEN,
        createdAt: new Date("2023-09-01T10:00:00Z"),
        updatedAt: new Date("2023-09-01T10:00:00Z"),
      },
      {
        title: "Product Page Loading Slowly",
        description:
          "The product page is taking a long time to load, causing a poor user experience.",
        status: Status.IN_PROGRESS,
        createdAt: new Date("2023-09-02T11:15:00Z"),
        updatedAt: new Date("2023-09-02T11:15:00Z"),
      },
      {
        title: "Payment Gateway Down",
        description:
          "The payment gateway is currently offline, preventing customers from making purchases.",
        status: Status.CLOSED,
        createdAt: new Date("2023-09-03T12:30:00Z"),
        updatedAt: new Date("2023-09-03T12:30:00Z"),
      },
      {
        title: "Mobile App Crashes on Launch",
        description:
          "The mobile app crashes immediately upon launch, making it unusable.",
        status: Status.OPEN,
        createdAt: new Date("2023-09-04T13:45:00Z"),
        updatedAt: new Date("2023-09-04T13:45:00Z"),
      },
      {
        title: "Order Tracking Not Updating",
        description:
          "Customers are unable to track their orders as the tracking information is not being updated.",
        status: Status.IN_PROGRESS,
        createdAt: new Date("2023-09-05T14:00:00Z"),
        updatedAt: new Date("2023-09-05T14:00:00Z"),
      },
      {
        title: "Missing Product Images",
        description:
          "Some product images are missing from the catalog, making it hard for customers to view products.",
        status: Status.CLOSED,
        createdAt: new Date("2023-09-06T15:15:00Z"),
        updatedAt: new Date("2023-09-06T15:15:00Z"),
      },
      {
        title: "Password Reset Not Working",
        description:
          'Users cannot reset their passwords using the "Forgot Password" feature on the website.',
        status: Status.OPEN,
        createdAt: new Date("2023-09-07T16:30:00Z"),
        updatedAt: new Date("2023-09-07T16:30:00Z"),
      },
      {
        title: "Checkout Process Errors",
        description:
          "Customers are encountering errors during the checkout process, preventing them from completing orders.",
        status: Status.IN_PROGRESS,
        createdAt: new Date("2023-09-08T17:45:00Z"),
        updatedAt: new Date("2023-09-08T17:45:00Z"),
      },
      {
        title: "Email Notifications Delayed",
        description:
          "Email notifications, such as order confirmations and shipping updates, are being delayed.",
        status: Status.CLOSED,
        createdAt: new Date("2023-09-09T18:00:00Z"),
        updatedAt: new Date("2023-09-09T18:00:00Z"),
      },
      {
        title: "Broken Links on Homepage",
        description:
          "There are broken links on the homepage that need to be fixed for a seamless user experience.",
        status: Status.OPEN,
        createdAt: new Date("2023-09-10T19:15:00Z"),
        updatedAt: new Date("2023-09-10T19:15:00Z"),
      },
      {
        title: "Inventory Sync Issue",
        description:
          "The inventory levels are not syncing correctly, leading to discrepancies between online and offline stock.",
        status: Status.IN_PROGRESS,
        createdAt: new Date("2023-09-11T20:30:00Z"),
        updatedAt: new Date("2023-09-11T20:30:00Z"),
      },
      {
        title: "Performance Degradation on Server",
        description:
          "The server is experiencing performance degradation, causing slow response times.",
        status: Status.CLOSED,
        createdAt: new Date("2023-09-12T21:45:00Z"),
        updatedAt: new Date("2023-09-12T21:45:00Z"),
      },
      {
        title: "Broken Search Functionality",
        description:
          "The search functionality on the website is not returning accurate results or is not working at all.",
        status: Status.OPEN,
        createdAt: new Date("2023-09-13T22:00:00Z"),
        updatedAt: new Date("2023-09-13T22:00:00Z"),
      },
      {
        title: "SSL Certificate Expiry",
        description:
          "The SSL certificate is nearing its expiry date and needs to be renewed to ensure secure connections.",
        status: Status.IN_PROGRESS,
        createdAt: new Date("2023-09-14T23:15:00Z"),
        updatedAt: new Date("2023-09-14T23:15:00Z"),
      },
      {
        title: "Incorrect Product Pricing",
        description:
          "Some products are displaying incorrect prices, leading to pricing discrepancies.",
        status: Status.CLOSED,
        createdAt: new Date("2023-09-15T09:30:00Z"),
        updatedAt: new Date("2023-09-15T09:30:00Z"),
      },
      {
        title: "404 Error on Blog Pages",
        description:
          "Visitors are encountering 404 errors when trying to access blog articles on the website.",
        status: Status.OPEN,
        createdAt: new Date("2023-09-16T10:45:00Z"),
        updatedAt: new Date("2023-09-16T10:45:00Z"),
      },
      {
        title: "Customer Support Chat Unavailable",
        description:
          "The live chat support feature is currently unavailable, leaving customers without immediate assistance.",
        status: Status.IN_PROGRESS,
        createdAt: new Date("2023-09-17T12:00:00Z"),
        updatedAt: new Date("2023-09-17T12:00:00Z"),
      },
      {
        title: "Missing User Profile Data",
        description:
          "User profile data, such as names and contact information, is missing for some accounts.",
        status: Status.CLOSED,
        createdAt: new Date("2023-09-18T13:15:00Z"),
        updatedAt: new Date("2023-09-18T13:15:00Z"),
      },
      {
        title: "Payment Refund Request",
        description:
          "A customer has requested a refund for an order, and it needs to be processed promptly.",
        status: Status.OPEN,
        createdAt: new Date("2023-09-19T14:30:00Z"),
        updatedAt: new Date("2023-09-19T14:30:00Z"),
      },
      {
        title: "Broken Checkout Button",
        description:
          'The "Checkout" button on the website is not functioning correctly, preventing order completion.',
        status: Status.IN_PROGRESS,
        createdAt: new Date("2023-09-20T15:45:00Z"),
        updatedAt: new Date("2023-09-20T15:45:00Z"),
      },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
