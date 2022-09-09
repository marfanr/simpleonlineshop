FROM golang:alpine3.16
RUN mkdir -p /root
WORKDIR /root
COPY ./go.mod /root/go.mod
RUN go mod download
COPY . /root
RUN go build .
EXPOSE 3535
CMD [ "/root/users" ]
