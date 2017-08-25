#!/usr/bin/env bash

webbucket=awsplusplus.security.gallagher.io

aws s3 cp lib s3://$webbucket/lib/ --recursive
aws s3 cp aws s3://$webbucket/aws/ --recursive

for html in *.html
do
    aws s3 cp $html s3://$webbucket/
done

for css in *.css
do
    aws s3 cp $css s3://$webbucket/
done

for js in *.js
do
    aws s3 cp $js s3://$webbucket/
done

exit 0
