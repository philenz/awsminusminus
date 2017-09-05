#!/usr/bin/env bash

webbucket=awsplusplus.security.gallagher.io

aws s3 cp aws s3://$webbucket/aws/ --recursive
aws s3 cp config s3://$webbucket/config/ --recursive

aws s3 cp index.html s3://$webbucket/
aws s3 cp index.js s3://$webbucket/
aws s3 cp favicon.ico s3://$webbucket/


exit 0
