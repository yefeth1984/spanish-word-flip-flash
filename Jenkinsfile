pipeline {
  agent {
    docker {
      image 'node:22-alpine'
    }
  }

  environment {
    E2E_BASE_URL = 'http://localhost:8080'
    VITE_FF_DISABLE_BUGS = 'true'
  }

  stages {
    stage('build') {
      steps {
        sh 'npm ci'
        sh 'npm run build'
      }
    }

    stage('test') {
      steps {
        // Unit tests with Vitest
        sh 'npx vitest run --reporter=verbose'
      }
    }

    stage('deploy') {
      steps {
        // Mock deployment which does nothing
        echo 'Mock deployment was successful!'
      }
    }
  }
}


