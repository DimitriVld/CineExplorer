pipeline {
    agent any

    environment {
        PATH = "/opt/homebrew/bin:${env.PATH}"
    }

    stages {
        stage('Vérifier le Shell') {
            steps {
                echo 'Vérification de la disponibilité des shells...'
                sh 'which sh || echo "sh non trouvé"'
                sh 'which bash || echo "bash non trouvé"'
                sh 'echo "PATH actuel : $PATH"'
            }
        }

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
