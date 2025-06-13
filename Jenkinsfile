pipeline {
    agent any

    stages {
        stage('Clone') {
            steps {
                git branch: 'master', url: 'https://github.com/MarcioDT/Modulo-12.git'                
            }
        }
        stage('Instalando Dependencias') {
            steps {
               bat 'npm install'
            }
        }        
        stage('Teste') {
            steps {
                bat '''set NO_COLOR=1
                npm cypress run'''              
            }
        }

    }
}