pipeline {
    agent any
    environment {
        NODEJS_HOME = tool name: 'NodeJS 14'
        PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/PeterStoyanov83/DevOps_13_Exam_Preparation__13_Exam_Preparation.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Run UI Tests') {
            steps {
                sh 'npm run ui-test'
            }
        }
        stage('Deploy to Render') {
            environment {
                RENDER_TOKEN = credentials('RENDER_TOKEN')
                SERVICE_ID = credentials('SERVICE_ID')
            }
            steps {
                script {
                    def response = sh(script: """
                    curl -X POST https://api.render.com/v1/services/${SERVICE_ID}/deploys \
                    -H 'Accept: application/json' \
                    -H 'Authorization: Bearer ${RENDER_TOKEN}' \
                    -d ''
                    """, returnStdout: true).trim()
                    echo "Deployment response: ${response}"
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}
