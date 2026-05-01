terraform {
  backend "s3" {
    bucket = "<%= tfStateBucket %>"
    key    = "<%= appName %>/<%= appName %>.tfstate"
    region = "us-east-1"
  }
}

provider "aws" {
    version = "~> 6.0"
    region = "us-east-1"
}
