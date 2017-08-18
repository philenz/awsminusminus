#!/usr/bin/env bash

webbucket=awsplusplus.security.gallagher.io

aws s3 cp lib s3://$webbucket/lib/ --recursive

aws s3 cp index.html s3://$webbucket/
aws s3 cp apigClient.js s3://$webbucket/

exit 0
