FROM golang:alpine3.16
RUN mkdir -p /root
WORKDIR /root
COPY . /root
# RUN go mod download
RUN go build .
EXPOSE 3535
CMD [ "/root/users" ]
