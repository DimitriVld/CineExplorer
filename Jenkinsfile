pipeline {
    agent any

    stages {
        stage('Setup Git LFS') {
            steps {
                sh '''
                    if ! command -v git-lfs &> /dev/null
                    then
                        echo "Git LFS non trouvé, installation..."
                        brew install git-lfs || sudo apt-get install git-lfs -y
                        git lfs install
                    else
                        echo "Git LFS déjà installé"
                    fi
                '''
            }
        }
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
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
