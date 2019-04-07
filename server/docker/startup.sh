#!/bin/ash
echo "Startup ran" > startup.log
nginx
uwsgi --ini app.ini --uid nginx --gid www-data --logto /tmp/uwsgi.log &
tail -f /dev/null
