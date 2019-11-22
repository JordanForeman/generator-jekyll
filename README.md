# `@jordanforeman/generator-jekyll`

An opinionated Yeoman generator for creating a static website built using Jekyll.

## Technologies Used

| Tool / Framework | Description | Homepage |
|------------------|-------------|----------|
| [Jekyll](https://jekyllrb.com) | Static website builder | [https://jekyllrb.com](https://jekyllrb.com) |
| AWS | Web hosting (S3 & CloudFront) | |
| [Terraform](https://terraform.io) | Cloud Infrastructure Management | [https://terraform.io](https://terraform.io) |
| [GitHub Actions](https://github.com/features/actions) | CI/CD | [https://github.com/features/actions](https://github.com/features/actions) |

## Installation

```bash
$ npm i -g @jordanforeman/generator-jekyll
```

## Usage

```bash
$ yo @jordanforeman/jekyll
```

## Prerequisites

The generator will ask a couple of questions which presuppose the existence of a few global resources in AWS:

* An AWS Route53 [Hosted Zone](https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingHostedZone.html)
* An S3 bucket to [store Terraform statefiles](https://www.terraform.io/docs/backends/types/s3.html)
* An SSL certificate managed by AWS Certificate Manager (attached to the aforementioned R53 zone)
