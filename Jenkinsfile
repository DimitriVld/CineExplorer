pipeline {
    agent any
    stages {
        stage('Check Git LFS') {
            steps {
                sh 'which git-lfs'
                sh 'git lfs version'
            }
        }
    }
}