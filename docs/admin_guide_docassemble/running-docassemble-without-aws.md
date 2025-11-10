---
slug: running-without-aws
title: Running Docassemble without AWS and S3
sidebar_label: Running Docassemble without AWS
---

## Motivation

In most situations, we recommend that you follow ["Installing a Docassemble Server"](setup-server) and use a hosted
virtual server with S3 compatible storage, which will give you more resilient servers and easier backups. If
for some reason you need to host all of you servers on premises and cannot use cloud servers, this guide should
be helpful.

## Setup your Domain

These are mostly the same steps from ["Choose a DNS Name"](setup-server#choose-a-dns-name) and ["Create an 'A' record"](setup-server#create-an-a-record-that-points-to-the-reserved-ip-address-in-your-dns-providers-website). If you are hosting your own servers,
you will need to find out what IP address you have and point the 'A' record to that address.

## Start the Docassemble server

### Install Docker

Even if you are running Docassemble on your own server, we still recommend that you use Docker
to run docassemble. As described in [the Docassemble documentation](https://docassemble.org/docs/installation.html#docker), running Docassemble without Docker is a significantly complicated exercise, with multiple long-running and reoccuring processes, and there are not many benefits that you can get from doing it.

So, the first step to starting the Docassemble server is to install Docker. This can follow the same steps from ["Install Docker"](setup-server#install-docker). If you are running on a different OS than linux, you should follow [Docker's official installation instructions](https://www.docker.com/get-started/).

### Start Docassemble

You can first create an `env.list` file, which should contain the following:

```txt
DAHOSTNAME=apps.example.com
TIMEZONE=America/New_York
USEHTTPS=true
USELETSENCRYPT=true
LETSENCRYPTEMAIL=apps@example.com
DAEXTRAFONTS=false
DAGOOGLEFONTS=false
```

Then, you can start Docassemble.

```bash
docker run -d -p 443:443 -p 80:80 -v dabackup:/usr/share/docassemble/backup --restart unless-stopped --env-file env.list --stop-timeout 600 --name docassemble jhpyle/docassemble
```

## Upgrading the Docassemble server

The above command (specifically the `-v` argument) created a docker volume that saves all information from the `/usr/share/docassemble/backup` directory somewhere separate from the Docassemble container on your machine. To upgrade to a newer version of the Docassemble container, you can do so without any extra commands handling the data.

```bash
docker stop -t 600 docassemble
docker pull jhpyle/docassemble
docker rm docassemble
docker run -d -p 443:443 -p 80:80 -v dabackup:/usr/share/docassemble/backup --restart unless-stopped --env-file env.list --stop-timeout 600 --name docassemble jhpyle/docassemble
```

## Saving Backup data

All of the backup information is present in your Docker volume. If you want extra
copies of that data to store elsewhere, you can use the following command while the 
container is running.

```bash
docker cp docassemble:/usr/share/docassemble/backup .
```

The resulting directory, `backup`, will have folders named after
each date when the backup was taken, and the server can be restored from
at any time.

## Restorting Backup data

If you want to rollback to data from a certain date, first stop the existing
Docassemble container, and create (but don't start) a new one:

```bash
docker stop -t 600 docassemble
docker pull jhpyle/docassemble
docker rm docassemble
docker create -p 443:443 -p 80:80 -v dabackup:/usr/share/docassemble/backup --restart unless-stopped --env-file env.list --stop-timeout 600 --name docassemble jhpyle/docassemble
```

From there, copy the data from one of the dated backup folders into the main backup folder.

```bash
# Copy locally first: docker can't copy within the container
docker cp docassemble:/usr/share/docassemble/backup/11-03 backup
docker cp backup docassemble:/usr/share/docassemble
```

Then start the container.

```bash
docker start docassemble
```