pipeline {
    agent any

    tools {
        // These names must match Manage Jenkins -> Tools
        jdk 'JDK17'
        maven 'Maven3'
    }

    stages {
        stage('Checkout') {
            steps {
                echo 'Project pulled from Git successfully'
                bat 'dir'
            }
        }

        stage('Backend Build - Spring Boot') {
            steps {
                dir('user-backend') {
                    echo 'Building Spring Boot backend...'
                    bat 'mvn clean package -DskipTests'
                    bat 'dir target'
                }
            }
        }

        stage('Frontend Build - React') {
            steps {
                dir('user-frontend') {
                    echo 'Building React frontend...'
                    bat 'npm install'
                    bat 'npm run build'
                    bat 'dir dist'
                }
            }
        }

        stage('Show Build Output') {
            steps {
                echo 'Backend artifact: user-backend/target/user-backend-0.0.1-SNAPSHOT.jar'
                echo 'Frontend artifact folder: user-frontend/dist'
                echo 'Jenkins build completed. Check Archived Artifacts.'
            }
        }

        stage('Archive Artifacts') {
            steps {
                archiveArtifacts artifacts: 'user-backend/target/*.jar, user-frontend/dist/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'SUCCESS: User Management System built successfully in Jenkins.'
        }
        failure {
            echo 'FAILED: Check the Console Output above for the exact error.'
        }
    }
}
