pipeline {
    agent any

    stages {
        stage('Cloner le dépôt') {
            steps {
                git branch: 'master', url: 'https://github.com/DimitriVld/CineExplorer.git'
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
            archiveArtifacts artifacts: '**/build/**', allowEmptyArchive: true
            junit '**/test-results.xml'
        }
    }
}
