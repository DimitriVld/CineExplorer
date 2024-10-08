pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Installer les dépendances') {
            steps {
                sh 'npm install'
                sh 'cd ios && pod install && cd ..'
            }
        }

        stage('Lancer les tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build avec Fastlane') {
            steps {
                sh 'fastlane ios build'
            }
        }
    }

    post {
        always {
            script {
                if (currentBuild.result != 'FAILURE') {
                    archiveArtifacts artifacts: '**/build/libs/*.jar', allowEmptyArchive: true
                }
            }
        }
    }
}
