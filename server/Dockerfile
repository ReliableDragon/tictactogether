FROM alpine:3.9

WORKDIR /app

COPY . /app

RUN apk add --update python3 python3-dev nginx gcc libc-dev linux-headers openrc

RUN pip3 install --upgrade pip
RUN pip3 install virtualenv

RUN virtualenv /app && source /app/bin/activate

RUN pip install uwsgi flask

RUN chown nginx /app && chgrp www-data /app

RUN uwsgi --ini app.ini --uid nginx --gid www-data &

#RUN mkdir /etc/nginx/sites-available \
#    && cp /app/nginx_site /etc/nginx/sites-available/kingdomgame \
#    && ln -s /etc/nginx/sites-available/kingdomgame /etc/nginx/sites-enabled \
RUN mkdir -p /run/nginx \
    && rm /etc/nginx/nginx.conf \
    && cp /app/nginx_conf /etc/nginx/nginx.conf

RUN nginx # Validate configs with `nginx -t`

#RUN pip install --trusted-host pypi.python.org -r requirements.txt

#CMD ["python3", "app.py"]