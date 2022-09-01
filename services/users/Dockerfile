FROM golang
RUN mkdir -p /root
WORKDIR /root
COPY . /root
RUN go mod download
RUN go build .
EXPOSE 3535
CMD [ "/root/users" ]
# RUN rm /etc/nginx/nginx.conf
# COPY nginx.conf /etc/nginx/nginx.conf
