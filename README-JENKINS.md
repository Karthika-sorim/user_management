# Jenkins Setup for User Management System

This project contains:

- `user-backend` - Spring Boot Maven project
- `user-frontend` - React Vite project
- `Jenkinsfile` - Jenkins pipeline file

## Jenkins Job Type

Create a **Pipeline** job.

## Jenkins Configuration

Use:

- Definition: `Pipeline script from SCM`
- SCM: `Git`
- Repository URL: your GitHub repository URL
- Branch: `*/main`
- Script Path: `Jenkinsfile`

## Required Jenkins Tools

Go to:

`Manage Jenkins -> Tools`

Configure:

- JDK name: `JDK17`
- Maven name: `Maven3`
- Git executable path: full path like `C:\Program Files\Git\cmd\git.exe`

Node.js must also be available in system PATH because the frontend uses `npm`.

## What the pipeline does

1. Pulls code from Git
2. Builds Spring Boot backend using:

```cmd
mvn clean package -DskipTests
```

3. Builds React frontend using:

```cmd
npm install
npm run build
```

4. Archives:

- Backend `.jar`
- Frontend `dist/` files

## Expected Jenkins Output

In Console Output, you should see:

```text
SUCCESS: User Management System built successfully in Jenkins.
Finished: SUCCESS
```

Archived artifacts will contain:

```text
user-backend/target/user-backend-0.0.1-SNAPSHOT.jar
user-frontend/dist/
```
