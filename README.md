# Quick Start Guide

**Step 1: Clone the Repository**

Begin by cloning the repository to your local machine.

**Step 2: Create a GitHub OAuth App**

Follow the instructions provided in the [GitHub OAuth App Documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to create a GitHub OAuth app.

**Step 3: Configure OAuth App**

Configure the OAuth app by setting the following URLs:
- Homepage URL: `http://localhost:3000`
- Callback URL: `http://localhost:3000/github/callback`

**Step 4: Check yarn Versions**

Verify that the required npm versions specified in the `package.json` file are installed on your system.

**Step 5: Install Dependencies**

Use the command `yarn install` to install all the necessary dependencies for the project.

**Step 6: Set Environment Variables**

Create a `.env` file in the project's root directory and add the following variables:

`
GITHUB_CLIENT_ID=client_id
`

`
GITHUB_CLIENT_SECRET=client_secret
`

`
GITHUB_SCOPE=repo
`

**Step 7: Start the Server**

Launch the server by running the command `yarn run start`.

# Usage Instructions

1. Access the application in Localhost: `http://localhost:3000`
  

2. Click on the "Create a Github repository" button and authorize the app.

3. The application will create a new repository called "django-accounts-boilerplate-test" using the provided template located at `arjyo851/django-accounts-boilerplate`.

# Execution Flow

1. Clicking on the "Create a Github repository" button will redirect you to the authorization page.

2. After authorization, the application will automatically generate a repository containing sample files.



