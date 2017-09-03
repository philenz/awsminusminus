#!/usr/bin/env bash

# Create a backup of files listed to Google Drive

files=( 'config/config.json' )

skicka mkdir /Source/awsminusminus

for file in $files
do
    echo Copying $file to Google Drive

	fname=`basename $file`
	dname=`dirname $file`

	skicka mkdir -p /Source/awsminusminus/$dname
	skicka upload $file /Source/awsminusminus/$dname/$fname
done

exit 0
