pipeline {
    agent any

    stages {
        stage('Provisioning of VM and application') {
            when{ branch 'master' }
            steps {
              sh 'ansible-playbook -i host playbook.yml'
            }
        }
    }
}