# The name of your project. A project typically maps 1:1 to a VCS repository.
# This name must be unique for your Waypoint server. If you're running in
# local mode, this must be unique to your machine.
project = "trello-clone"

# An application to deploy.
app "frontend" {
  labels = {
    "service" = "trello-clone-frontend",
    "env" = "dev"
  }

  path = "client"

  # Build specifies how an application should be deployed
  build {
    use "pack" {}

    registry {
      use "aws-ecr" {
        region = "us-east-1"
        repository = "trello-clone-frontend"
        tag = "latest"
      }
    }
  }

  deploy {
    use "aws-ecs" {
      region = "us-east-1"
      memory = "512"
    }
  }
}

app "backend" {
  labels = {
    "service" = "trello-clone-backend",
    "env" = "dev"
  }

  path = "server/"

  build {
    use "pack" {}

    registry {
      use "aws-ecr" {
        region = "us-east-1"
        repository = "trello-clone-backend"
        tag = "latest"
      }
    }
  }

  deploy {
    use "aws-ecs" {
      region = "us-east-1"
      memory = "512"
    }
  }
}