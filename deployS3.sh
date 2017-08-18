#!/usr/bin/env bash

aws s3 cp lib s3://awsplusplus/lib/ --recursive

aws s3 cp index.html s3://awsplusplus/
aws s3 cp apigClient.js s3://awsplusplus/

exit 0
